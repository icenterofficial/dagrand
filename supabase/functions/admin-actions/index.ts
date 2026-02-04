// Follow this setup guide to deploy: https://supabase.com/docs/guides/functions/deploy
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

// Declare Deno to avoid TypeScript errors in environments without Deno types
declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
}

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? '';

    if (!supabaseUrl || !serviceRoleKey) {
        throw new Error('Server misconfiguration: Missing Env Vars');
    }

    // 1. Create a Supabase Client with the Service Role Key (Secure Backend Client)
    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    // 2. Check Authorization Header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing Authorization Header' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      })
    }

    // 3. Create a User Client to verify who is making the request
    const supabaseUser = createClient(supabaseUrl, anonKey, { 
        global: { headers: { Authorization: authHeader } } 
    })

    // 4. Verify the user's role
    const { data: { user }, error: userError } = await supabaseUser.auth.getUser()

    if (userError || !user) {
        return new Response(JSON.stringify({ error: 'Unauthorized', details: userError?.message }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 401,
        })
    }

    if (user.user_metadata.role !== 'admin') {
        return new Response(JSON.stringify({ error: 'Forbidden: Admin access required' }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 403,
        })
    }

    // 5. Handle Logic based on Action
    let body;
    try {
        body = await req.json();
    } catch(e) {
        throw new Error("Invalid JSON body");
    }

    const { action, payload } = body;
    let result;

    // --- SECURITY: Server-Side Validation Helper ---
    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    switch (action) {
        case 'listUsers':
            const { data: users, error: listError } = await supabaseAdmin.auth.admin.listUsers()
            if (listError) throw listError
            result = { users: users.users }
            break

        case 'createUser':
            const { email, password, fullName, role } = payload
            
            // Server-side Validation
            if (!email || !validateEmail(email)) throw new Error("Invalid email format");
            if (!password || password.length < 6) throw new Error("Password too short");
            if (!fullName || fullName.length > 100) throw new Error("Name invalid");
            if (!['admin', 'editor'].includes(role)) throw new Error("Invalid role");

            const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
                email,
                password,
                email_confirm: true,
                user_metadata: { full_name: fullName, role }
            })
            if (createError) throw createError
            result = { user: newUser }
            break

        case 'deleteUser':
            const { userId } = payload
            if (!userId) throw new Error("User ID required");
            if (userId === user.id) throw new Error("Cannot delete yourself"); // Prevention

            const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(userId)
            if (deleteError) throw deleteError
            result = { success: true }
            break

        case 'updateUser':
            const { userId: updateId, attributes } = payload
            if (!updateId) throw new Error("User ID required");
            
            // Sanitize Attributes (Allow only specific metadata updates)
            const allowedMetadata = ['role', 'full_name'];
            const safeAttributes: any = {};
            
            if (attributes.user_metadata) {
                safeAttributes.user_metadata = {};
                for (const key of allowedMetadata) {
                    if (attributes.user_metadata[key]) {
                        safeAttributes.user_metadata[key] = attributes.user_metadata[key];
                    }
                }
            }

            const { data: updatedUser, error: updateError } = await supabaseAdmin.auth.admin.updateUserById(updateId, safeAttributes)
            if (updateError) throw updateError
            result = { user: updatedUser }
            break

        default:
            throw new Error(`Unknown action: ${action}`)
    }

    // 6. Return success response
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error: any) {
    // Catch-all error handler ensures JSON response
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})