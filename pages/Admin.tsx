

import React, { useState, useEffect } from 'react';
import { useArticles } from '../context/ArticleContext';
import { useAuth, User } from '../context/AuthContext'; // Updated imports
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Plus, Trash2, LogOut, LayoutDashboard, FileText, ArrowLeft, User as UserIcon, Shield, Users, Save } from 'lucide-react';

type ViewMode = 'dashboard' | 'create-article' | 'manage-team';

const Admin = () => {
  const { articles, addArticle, deleteArticle } = useArticles();
  const { user, users, login, logout, isAuthenticated, addUser, deleteUser } = useAuth();
  const navigate = useNavigate();
  
  // Login Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dashboard View State
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');

  // Article Form State
  const [formData, setFormData] = useState<Partial<import('../types').Article>>({
    title: '',
    category: 'corporate',
    author: '',
    date: new Date().toISOString().split('T')[0],
    excerpt: '',
    content: [''],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80'
  });

  // User Creation Form State
  const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
      role: 'editor' as 'admin' | 'editor'
  });

  // Auto-fill author
  useEffect(() => {
    if (user && currentView === 'create-article') {
        setFormData(prev => ({ ...prev, author: user.name }));
    }
  }, [user, currentView]);

  // --- Login Handler ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      setError('');
    } else {
      setError('Invalid credentials.');
    }
  };

  // --- Article Handlers ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, content: e.target.value.split('\n\n') }));
  };

  const handleArticleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const newArticle: import('../types').Article = {
      id: Date.now().toString(),
      title: formData.title || 'Untitled',
      excerpt: formData.excerpt || '',
      content: formData.content || [],
      date: formData.date || '',
      category: formData.category || 'corporate',
      author: user.name,
      image: formData.image || ''
    };

    addArticle(newArticle);
    setCurrentView('dashboard');
    setFormData({
        title: '',
        category: 'corporate',
        author: user.name,
        date: new Date().toISOString().split('T')[0],
        excerpt: '',
        content: [''],
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80'
    });
    alert("Article Published Successfully!");
  };

  // --- User Management Handlers ---
  const handleAddUser = (e: React.FormEvent) => {
      e.preventDefault();
      if(users.some(u => u.email === newUser.email)) {
          alert("User with this email already exists!");
          return;
      }
      
      const userToAdd: User = {
          id: Date.now().toString(),
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          password: newUser.password,
          avatar: newUser.name.charAt(0).toUpperCase()
      };

      addUser(userToAdd);
      setNewUser({ name: '', email: '', password: '', role: 'editor' });
      alert("New team member added! Send them their credentials.");
  };

  // --- RENDER: Login Screen ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border-t-4 border-brand-900">
          <div className="text-center mb-8">
            <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-brand-900" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Staff Portal</h1>
            <p className="text-slate-500 text-sm">Please sign in to continue</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-brand-900 outline-none"
                placeholder="email@dagrand.net"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-brand-900 outline-none"
                placeholder="••••••"
              />
            </div>
            {error && (
                <div className="bg-red-50 text-red-500 text-sm p-3 rounded border border-red-100">
                    {error}
                </div>
            )}
            <button type="submit" className="w-full bg-brand-900 text-white py-2 rounded font-bold hover:bg-brand-800 transition-colors shadow-lg">
              Sign In
            </button>

            {/* Hint for demo */}
            <div className="mt-6 p-4 bg-slate-50 rounded text-xs text-slate-500">
                <p className="font-bold mb-1">Default Demo Credentials:</p>
                <div className="flex justify-between mb-1">
                    <span>soky@dagrand.net (Admin)</span>
                    <span className="font-mono">123</span>
                </div>
                <div className="flex justify-between">
                    <span>tianxin@dagrand.net (Editor)</span>
                    <span className="font-mono">123</span>
                </div>
            </div>

            <div className="text-center mt-4">
                <Link to="/" className="text-sm text-slate-500 hover:text-brand-900">Back to Website</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER: Dashboard Layout ---
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-brand-900 text-slate-300 hidden md:flex flex-col">
        <div className="p-6 border-b border-brand-800">
            <h2 className="text-white font-serif font-bold text-xl">Dagrand CMS</h2>
        </div>
        
        {/* User Profile */}
        <div className="p-6 flex items-center gap-3 bg-brand-800/50">
            <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                {user?.avatar}
            </div>
            <div className="overflow-hidden">
                <p className="text-white text-sm font-bold truncate">{user?.name}</p>
                <p className="text-xs text-brand-200 uppercase tracking-wider flex items-center gap-1">
                    <Shield size={10} /> {user?.role}
                </p>
            </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
            <button onClick={() => setCurrentView('dashboard')} className={`flex items-center w-full px-4 py-3 rounded transition-colors ${currentView === 'dashboard' ? 'bg-brand-800 text-white' : 'hover:bg-brand-800/50'}`}>
                <LayoutDashboard size={20} className="mr-3" /> Dashboard
            </button>
            <button onClick={() => setCurrentView('create-article')} className={`flex items-center w-full px-4 py-3 rounded transition-colors ${currentView === 'create-article' ? 'bg-brand-800 text-white' : 'hover:bg-brand-800/50'}`}>
                <Plus size={20} className="mr-3" /> New Article
            </button>
            
            {/* Only Admin can see Manage Team */}
            {user?.role === 'admin' && (
                <button onClick={() => setCurrentView('manage-team')} className={`flex items-center w-full px-4 py-3 rounded transition-colors ${currentView === 'manage-team' ? 'bg-brand-800 text-white' : 'hover:bg-brand-800/50'}`}>
                    <Users size={20} className="mr-3" /> Manage Team
                </button>
            )}
        </nav>
        
        <div className="p-4 border-t border-brand-800">
            <button onClick={() => navigate('/')} className="flex items-center text-sm hover:text-white transition-colors mb-4">
                <ArrowLeft size={16} className="mr-2" /> View Live Site
            </button>
            <button onClick={logout} className="flex items-center text-red-400 hover:text-red-300 transition-colors w-full px-2 py-2 rounded hover:bg-white/5">
                <LogOut size={16} className="mr-2" /> Logout
            </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-6 flex justify-between items-center md:hidden">
             <h2 className="font-bold text-brand-900">Dagrand Admin</h2>
             <button onClick={logout}><LogOut size={20} /></button>
        </header>

        <div className="p-8 max-w-5xl mx-auto">
            
            {/* VIEW: CREATE ARTICLE */}
            {currentView === 'create-article' && (
                <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in-up">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">Write New Article</h2>
                        <button onClick={() => setCurrentView('dashboard')} className="text-slate-500 hover:text-slate-800">Cancel</button>
                    </div>
                    
                    <form onSubmit={handleArticleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Title</label>
                                <input name="title" required value={formData.title} onChange={handleInputChange} className="w-full border p-3 rounded focus:ring-2 focus:ring-brand-900 outline-none" placeholder="Enter article title" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full border p-3 rounded focus:ring-2 focus:ring-brand-900 outline-none">
                                    <option value="corporate">Corporate</option>
                                    <option value="tax">Tax Law</option>
                                    <option value="labor">Labor Law</option>
                                    <option value="realEstate">Real Estate</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Author</label>
                                <div className="flex items-center gap-2 w-full border p-3 rounded bg-slate-100 text-slate-500 cursor-not-allowed">
                                    <UserIcon size={16} />
                                    <span>{user?.name}</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Date</label>
                                <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full border p-3 rounded focus:ring-2 focus:ring-brand-900 outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Cover Image URL</label>
                            <input name="image" value={formData.image} onChange={handleInputChange} className="w-full border p-3 rounded focus:ring-2 focus:ring-brand-900 outline-none mb-2" placeholder="https://..." />
                            {formData.image && <img src={formData.image} alt="Preview" className="w-24 h-24 object-cover rounded border" />}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Short Excerpt</label>
                            <textarea name="excerpt" rows={3} value={formData.excerpt} onChange={handleInputChange} className="w-full border p-3 rounded focus:ring-2 focus:ring-brand-900 outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Content</label>
                            <textarea 
                                name="content" 
                                rows={10} 
                                value={Array.isArray(formData.content) ? formData.content.join('\n\n') : formData.content} 
                                onChange={handleContentChange} 
                                className="w-full border p-3 rounded focus:ring-2 focus:ring-brand-900 outline-none font-mono text-sm" 
                            />
                        </div>

                        <div className="pt-4 border-t flex justify-end">
                            <button type="submit" className="bg-gold-600 text-white px-8 py-3 rounded font-bold hover:bg-gold-500 shadow-lg">
                                Publish Article
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* VIEW: MANAGE TEAM */}
            {currentView === 'manage-team' && user?.role === 'admin' && (
                 <div className="space-y-8 animate-fade-in-up">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-serif font-bold text-brand-900">Team Management</h2>
                    </div>

                    {/* Add User Form */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2"><Plus size={18}/> Invite New Member</h3>
                        <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                            <div className="lg:col-span-1">
                                <label className="block text-xs font-bold text-slate-500 mb-1">Full Name</label>
                                <input required value={newUser.name} onChange={e => setNewUser({...newUser, name: e.target.value})} className="w-full border p-2 rounded text-sm" placeholder="e.g. Sok Piseth" />
                            </div>
                            <div className="lg:col-span-1">
                                <label className="block text-xs font-bold text-slate-500 mb-1">Email</label>
                                <input required type="email" value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} className="w-full border p-2 rounded text-sm" placeholder="email@dagrand.net" />
                            </div>
                            <div className="lg:col-span-1">
                                <label className="block text-xs font-bold text-slate-500 mb-1">Temp Password</label>
                                <input required type="text" value={newUser.password} onChange={e => setNewUser({...newUser, password: e.target.value})} className="w-full border p-2 rounded text-sm" placeholder="Set initial password" />
                            </div>
                             <div className="lg:col-span-1">
                                <label className="block text-xs font-bold text-slate-500 mb-1">Role</label>
                                <select value={newUser.role} onChange={e => setNewUser({...newUser, role: e.target.value as any})} className="w-full border p-2 rounded text-sm">
                                    <option value="editor">Editor</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="lg:col-span-1">
                                <button type="submit" className="w-full bg-brand-900 text-white py-2 rounded text-sm font-bold hover:bg-brand-800">Add User</button>
                            </div>
                        </form>
                    </div>

                    {/* Users List */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase">
                                <tr>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Role</th>
                                    <th className="p-4">Credentials (Simulation)</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {users.map(u => (
                                    <tr key={u.id} className="hover:bg-slate-50">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-900 font-bold text-xs">{u.avatar}</div>
                                                <div>
                                                    <div className="font-bold text-brand-900 text-sm">{u.name}</div>
                                                    <div className="text-xs text-slate-400">{u.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                                                {u.role}
                                            </span>
                                        </td>
                                        <td className="p-4 text-xs font-mono text-slate-500">
                                            Pass: {u.password}
                                        </td>
                                        <td className="p-4 text-right">
                                            {u.id !== user.id ? (
                                                <button onClick={() => deleteUser(u.id)} className="text-red-400 hover:text-red-600"><Trash2 size={16}/></button>
                                            ) : (
                                                <span className="text-xs text-slate-400 italic">Current User</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                 </div>
            )}

            {/* VIEW: DASHBOARD */}
            {currentView === 'dashboard' && (
                <div>
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-brand-900">Dashboard</h1>
                            <p className="text-slate-500">Welcome back, <span className="font-bold text-brand-900">{user?.name}</span>!</p>
                        </div>
                        <button onClick={() => setCurrentView('create-article')} className="bg-brand-900 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-brand-800 flex items-center gap-2 transition-all">
                            <Plus size={18} /> New Post
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-full"><FileText size={24}/></div>
                                <div>
                                    <p className="text-slate-500 text-sm font-bold uppercase">Total Articles</p>
                                    <p className="text-2xl font-bold text-brand-900">{articles.length}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-100 text-green-600 rounded-full"><Users size={24}/></div>
                                <div>
                                    <p className="text-slate-500 text-sm font-bold uppercase">Team Members</p>
                                    <p className="text-2xl font-bold text-brand-900">{users.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                                    <th className="p-4 font-bold">Title</th>
                                    <th className="p-4 font-bold">Category</th>
                                    <th className="p-4 font-bold">Date</th>
                                    <th className="p-4 font-bold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {articles.map(article => (
                                    <tr key={article.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4">
                                            <div className="font-bold text-brand-900">{article.title}</div>
                                            <div className="text-xs text-slate-400 flex items-center gap-1">
                                                {article.author === user?.name ? <UserIcon size={12} className="text-gold-500"/> : null}
                                                {article.author}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-bold uppercase">{article.category}</span>
                                        </td>
                                        <td className="p-4 text-sm text-slate-600">{article.date}</td>
                                        <td className="p-4 text-right">
                                            <button 
                                                onClick={() => {
                                                    if (user?.role !== 'admin') {
                                                        alert("Only Admins can delete articles.");
                                                        return;
                                                    }
                                                    if(window.confirm('Are you sure you want to delete this article?')) {
                                                        deleteArticle(article.id);
                                                    }
                                                }}
                                                className={`p-2 transition-colors ${user?.role === 'admin' ? 'text-slate-400 hover:text-red-500' : 'text-slate-200 cursor-not-allowed'}`}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
