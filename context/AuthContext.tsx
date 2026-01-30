
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
  avatar: string;
  password?: string;
}

const INITIAL_USERS: User[] = [
  {
    id: 'u1',
    name: 'Mr. CHAN Sokyana',
    email: 'soky@dagrand.net',
    role: 'admin',
    avatar: 'S',
    password: '123'
  },
  {
    id: 'u2',
    name: 'Mr. FU Tianxin',
    email: 'tianxin@dagrand.net',
    role: 'editor',
    avatar: 'T',
    password: '123'
  }
];

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  addUser: (newUser: User) => void;
  deleteUser: (id: string) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('dagrand_users');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('dagrand_session');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('dagrand_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('dagrand_session', JSON.stringify(user));
    } else {
      localStorage.removeItem('dagrand_session');
    }
  }, [user]);

  const login = (email: string, pass: string): boolean => {
    const foundUser = users.find(u => u.email === email && u.password === pass);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  };

  const deleteUser = (id: string) => {
     setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <AuthContext.Provider value={{ user, users, login, logout, addUser, deleteUser, isAuthenticated: !!user }}>
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
