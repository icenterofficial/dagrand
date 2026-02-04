import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
  avatar: string;
  password?: string; // Only used in Mock mode
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => Promise<void>;
  addUser: (user: User) => void; // Added helper
  isAuthenticated: boolean;
  isLoading: boolean;
  isMockMode: boolean; // Flag to tell UI if we are using Real DB or Mock
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const mockMode = !isSupabaseConfigured();

  // --- INITIALIZATION ---
  useEffect(() => {
    const initAuth = async () => {
      // 1. Load Static & Local Users
      let allUsers: User[] = [];
      try {
          // Fetch static JSON
          const res = await fetch('/data/users.json');
          const data = await res.json();
          if (data && data.users) allUsers = [...data.users];
      } catch (err) {
          console.error("Failed to load mock users:", err);
      }

      // Load locally saved users (from Fallback invites)
      try {
          const localSaved = localStorage.getItem('dagrand_users_list');
          if (localSaved) {
              const parsedLocal: User[] = JSON.parse(localSaved);
              // Merge: Add local user if email doesn't exist in static list
              parsedLocal.forEach(u => {
                  if (!allUsers.find(staticU => staticU.email.toLowerCase() === u.email.toLowerCase())) {
                      allUsers.push(u);
                  }
              });
          }
      } catch (e) { console.error("Error parsing local users", e); }
      
      setUsers(allUsers);

      // 2. Check Session
      if (mockMode) {
        // MOCK MODE: Load session from LocalStorage
        const savedSession = localStorage.getItem('dagrand_session');
        if (savedSession) setUser(JSON.parse(savedSession));
      } else {
        // SUPABASE MODE: Check active session
        // @ts-ignore
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
           const { user: sbUser } = session;
           setUser({
             id: sbUser.id,
             email: sbUser.email || '',
             name: sbUser.user_metadata?.full_name || 'Admin User',
             role: sbUser.user_metadata?.role || 'admin',
             avatar: sbUser.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${sbUser.email}&background=153c63&color=fff`
           });
        } else {
            // Check if we have a persisted mock session even in real mode (Hybrid support)
            const savedSession = localStorage.getItem('dagrand_session');
            if (savedSession) setUser(JSON.parse(savedSession));
        }

        // Listen for auth changes
        // @ts-ignore
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                const { user: sbUser } = session;
                setUser({
                    id: sbUser.id,
                    email: sbUser.email || '',
                    name: sbUser.user_metadata?.full_name || 'Admin User',
                    role: sbUser.user_metadata?.role || 'admin',
                    avatar: sbUser.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${sbUser.email}&background=153c63&color=fff`
                });
            } else {
                // If supabase logs out, check if we had a local session (manual logout handles clearing this)
                // But for now, we assume supabase logout means full logout
                setUser(null);
            }
        });
        return () => subscription.unsubscribe();
      }
    };

    initAuth().finally(() => setIsLoading(false));
  }, [mockMode]);

  // --- ADD USER (PERSIST LOCAL) ---
  const addUser = (newUser: User) => {
      setUsers(prev => {
          const updated = [...prev, newUser];
          // Persist only the custom added ones (simulate DB)
          // We filter ID usually, but here we just save the full list diff or all
          // Simple approach: Save all users that have a password (implies mock)
          const mockUsersToSave = updated.filter(u => u.password); 
          localStorage.setItem('dagrand_users_list', JSON.stringify(mockUsersToSave));
          return updated;
      });
  };

  // --- LOGIN ---
  const login = async (email: string, pass: string): Promise<boolean> => {
    // 1. Try Supabase Login first (if configured)
    if (!mockMode) {
      // @ts-ignore
      const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass });
      
      if (error) {
          console.error("Supabase Login Error:", error.message);
      }

      if (!error && data.session) return true;
      // If error, do NOT return false yet. Fall through to check Local/Mock users.
      // This allows logging in with "Offline" users even if Backend is live.
    }

    // 2. Try Local/Mock Users Check
    const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('dagrand_session', JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  // --- LOGOUT ---
  const logout = async () => {
    localStorage.removeItem('dagrand_session');
    
    if (!mockMode) {
      // @ts-ignore
      await supabase.auth.signOut();
    }
    
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, users, login, logout, addUser, isAuthenticated: !!user, isLoading, isMockMode: mockMode }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};