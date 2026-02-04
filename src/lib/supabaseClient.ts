import { createClient } from '@supabase/supabase-js';

// --- CONFIGURATION ---
// SECURITY NOTE: In a real production build, use import.meta.env.VITE_SUPABASE_URL
// We fallback to the hardcoded values for the demo, but check environment first.
const SUPABASE_URL = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://nxrrromcaaevxodwuitv.supabase.co'; 
const SUPABASE_ANON_KEY = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54cnJyb21jYWFldnhvZHd1aXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5MjY4MjksImV4cCI6MjA4NTUwMjgyOX0.N5IoX5_GQrg-WMPEB3dMGgOhE1HIZmEacPMp3UrLUl0';

// Standard Client (Safe to expose in browser)
export const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
      }
    }) 
  : null;

export const isSupabaseConfigured = () => !!supabase;
