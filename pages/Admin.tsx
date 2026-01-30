

import React, { useState, useEffect, useRef } from 'react';
import { useArticles } from '../context/ArticleContext';
import { useAuth, User } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Plus, Trash2, LogOut, LayoutDashboard, FileText, ArrowLeft, User as UserIcon, Shield, Users, Save, Menu, X, Edit, Upload, Image as ImageIcon, Check } from 'lucide-react';

type ViewMode = 'dashboard' | 'create-article' | 'manage-team';

const Admin = () => {
  const { articles, addArticle, updateArticle, deleteArticle } = useArticles();
  const { user, users, login, logout, isAuthenticated, addUser, deleteUser } = useAuth();
  const navigate = useNavigate();
  
  // Login Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dashboard View State
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Article Form State
  const [formData, setFormData] = useState<Partial<import('../types').Article>>({
    title: '',
    category: 'corporate',
    author: '',
    date: new Date().toISOString().split('T')[0],
    excerpt: '',
    content: [''],
    image: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // User Creation Form State
  const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
      role: 'editor' as 'admin' | 'editor'
  });

  // Auto-fill author when creating new
  useEffect(() => {
    if (user && currentView === 'create-article' && !editingId) {
        setFormData(prev => ({ ...prev, author: user.name }));
    }
  }, [user, currentView, editingId]);

  // Close mobile menu when view changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentView]);

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArticleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if (editingId) {
        // Update Existing
        const updatedArticle: import('../types').Article = {
            id: editingId,
            title: formData.title || 'Untitled',
            excerpt: formData.excerpt || '',
            content: formData.content || [],
            date: formData.date || '',
            category: formData.category || 'corporate',
            author: formData.author || user.name,
            image: formData.image || ''
        };
        updateArticle(updatedArticle);
        alert("Article Updated Successfully!");
    } else {
        // Create New
        const newArticle: import('../types').Article = {
            id: Date.now().toString(),
            title: formData.title || 'Untitled',
            excerpt: formData.excerpt || '',
            content: formData.content || [],
            date: formData.date || '',
            category: formData.category || 'corporate',
            author: user.name,
            image: formData.image || 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80'
        };
        addArticle(newArticle);
        alert("Article Published Successfully!");
    }

    setCurrentView('dashboard');
    resetForm();
  };

  const resetForm = () => {
      setEditingId(null);
      setFormData({
          title: '',
          category: 'corporate',
          author: user?.name || '',
          date: new Date().toISOString().split('T')[0],
          excerpt: '',
          content: [''],
          image: ''
      });
  };

  const handleEditClick = (article: import('../types').Article) => {
      setEditingId(article.id);
      setFormData({
          title: article.title,
          category: article.category,
          author: article.author,
          date: article.date,
          excerpt: article.excerpt,
          content: article.content,
          image: article.image
      });
      setCurrentView('create-article');
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

  // --- Shared Components ---
  const SidebarContent = () => (
      <>
        <div className="p-8 flex justify-center border-b border-brand-800">
             <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-lg">
                    <span className="font-serif font-bold text-2xl text-brand-900">D</span>
                 </div>
                 <h2 className="text-white font-serif font-bold text-lg tracking-wide">DAGRAND CMS</h2>
             </div>
        </div>
        
        {/* User Profile */}
        <div className="p-6">
             <div className="bg-brand-800 rounded-xl p-4 flex items-center gap-4 border border-brand-700 shadow-sm">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-md">
                    {user?.avatar}
                </div>
                <div className="overflow-hidden">
                    <p className="text-white text-sm font-bold truncate">{user?.name}</p>
                    <p className="text-[10px] text-brand-200 uppercase tracking-widest font-bold flex items-center gap-1 mt-1">
                        <Shield size={10} /> {user?.role}
                    </p>
                </div>
             </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
            <button onClick={() => { setCurrentView('dashboard'); resetForm(); }} className={`flex items-center w-full px-4 py-3.5 rounded-xl transition-all font-medium text-sm ${currentView === 'dashboard' ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/20' : 'text-slate-300 hover:bg-brand-800 hover:text-white'}`}>
                <LayoutDashboard size={18} className="mr-3 shrink-0" /> Dashboard
            </button>
            <button onClick={() => { setCurrentView('create-article'); resetForm(); }} className={`flex items-center w-full px-4 py-3.5 rounded-xl transition-all font-medium text-sm ${currentView === 'create-article' ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/20' : 'text-slate-300 hover:bg-brand-800 hover:text-white'}`}>
                <Plus size={18} className="mr-3 shrink-0" /> New Article
            </button>
            
            {/* Only Admin can see Manage Team */}
            {user?.role === 'admin' && (
                <button onClick={() => setCurrentView('manage-team')} className={`flex items-center w-full px-4 py-3.5 rounded-xl transition-all font-medium text-sm ${currentView === 'manage-team' ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/20' : 'text-slate-300 hover:bg-brand-800 hover:text-white'}`}>
                    <Users size={18} className="mr-3 shrink-0" /> Manage Team
                </button>
            )}
        </nav>
        
        <div className="p-6 mt-auto">
            <button onClick={() => navigate('/')} className="flex items-center text-sm text-slate-400 hover:text-white transition-colors mb-4 w-full px-2">
                <ArrowLeft size={16} className="mr-2" /> View Live Site
            </button>
            <button onClick={logout} className="flex items-center justify-center text-red-100 hover:text-white hover:bg-red-500/20 transition-all w-full px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-sm font-bold">
                <LogOut size={16} className="mr-2" /> Logout
            </button>
        </div>
      </>
  );

  // --- RENDER: Login Screen ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-brand-900">
          <div className="text-center mb-10">
            <div className="bg-brand-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Lock className="text-brand-900" size={36} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-900 mb-2">Staff Portal</h1>
            <p className="text-slate-500 text-sm">Welcome back. Please sign in.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                placeholder="email@dagrand.net"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                placeholder="••••••"
              />
            </div>
            {error && (
                <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg border border-red-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> {error}
                </div>
            )}
            <button type="submit" className="w-full bg-brand-900 text-white py-3.5 rounded-lg font-bold hover:bg-brand-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Sign In
            </button>

            <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 mb-2 text-center">DEMO ACCESS</p>
                <div className="flex justify-between text-xs bg-slate-50 p-3 rounded text-slate-600">
                    <span>soky@dagrand.net (123)</span>
                    <span>tianxin@dagrand.net (123)</span>
                </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER: Dashboard Layout ---
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row h-screen overflow-hidden">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-brand-900 text-white p-4 flex justify-between items-center shadow-md z-20 shrink-0">
         <div className="font-serif font-bold text-lg">Dagrand Admin</div>
         <button onClick={() => setIsMobileMenuOpen(true)}>
             <Menu size={24} />
         </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      <div className={`fixed inset-y-0 left-0 w-72 bg-brand-900 z-50 transform transition-transform duration-300 md:translate-x-0 md:static md:flex md:flex-col shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <SidebarContent />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto w-full relative bg-slate-50">
        <div className="p-4 md:p-10 max-w-7xl mx-auto pb-24">
            
            {/* VIEW: CREATE/EDIT ARTICLE */}
            {currentView === 'create-article' && (
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 animate-fade-in-up">
                    <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-white rounded-t-2xl sticky top-0 z-10">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-brand-900">{editingId ? 'Edit Article' : 'Write New Article'}</h2>
                            <p className="text-slate-400 text-sm mt-1">{editingId ? 'Updating existing content' : 'Create something insightul today'}</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => { setCurrentView('dashboard'); resetForm(); }} className="px-4 py-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors">Cancel</button>
                            <button onClick={handleArticleSubmit} className="bg-gold-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-gold-500 shadow-lg shadow-gold-500/20 flex items-center gap-2">
                                <Save size={18} /> {editingId ? 'Update Post' : 'Publish Post'}
                            </button>
                        </div>
                    </div>
                    
                    <form className="p-6 md:p-10 space-y-8">
                        {/* Title Section */}
                        <div className="space-y-4">
                            <input 
                                name="title" 
                                required 
                                value={formData.title} 
                                onChange={handleInputChange} 
                                className="w-full text-3xl md:text-4xl font-serif font-bold text-brand-900 placeholder:text-slate-300 border-none focus:ring-0 outline-none p-0" 
                                placeholder="Enter your article title here..." 
                            />
                            <div className="h-1 w-20 bg-gold-500 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-8">
                                {/* Editor Area */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Content</label>
                                    <textarea 
                                        name="content" 
                                        rows={15} 
                                        value={Array.isArray(formData.content) ? formData.content.join('\n\n') : formData.content} 
                                        onChange={handleContentChange} 
                                        className="w-full border border-slate-200 p-6 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none font-serif text-lg leading-loose text-slate-700 bg-slate-50/30" 
                                        placeholder="Start writing your story..."
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Short Excerpt</label>
                                    <textarea 
                                        name="excerpt" 
                                        rows={3} 
                                        value={formData.excerpt} 
                                        onChange={handleInputChange} 
                                        className="w-full border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none text-slate-600" 
                                        placeholder="A brief summary for the preview card..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Settings Panel */}
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h3 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
                                        <LayoutDashboard size={18} className="text-gold-500"/> Post Settings
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 mb-2">Category</label>
                                            <select name="category" value={formData.category} onChange={handleInputChange} className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none bg-white">
                                                <option value="corporate">Corporate</option>
                                                <option value="tax">Tax Law</option>
                                                <option value="labor">Labor Law</option>
                                                <option value="realEstate">Real Estate</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 mb-2">Publish Date</label>
                                            <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none bg-white" />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 mb-2">Author</label>
                                            <div className="flex items-center gap-2 w-full border border-slate-200 p-3 rounded-lg bg-white text-slate-600">
                                                <UserIcon size={16} />
                                                <input 
                                                    name="author"
                                                    value={formData.author} 
                                                    onChange={handleInputChange}
                                                    className="bg-transparent w-full outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Upload */}
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                     <h3 className="font-bold text-brand-900 mb-4 flex items-center gap-2">
                                        <ImageIcon size={18} className="text-gold-500"/> Cover Image
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        {formData.image ? (
                                            <div className="relative group rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                                                <img src={formData.image} alt="Preview" className="w-full h-40 object-cover" />
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button type="button" onClick={() => fileInputRef.current?.click()} className="text-white bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm">
                                                        <Edit size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div 
                                                onClick={() => fileInputRef.current?.click()}
                                                className="border-2 border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-gold-500 hover:bg-gold-50 transition-colors"
                                            >
                                                <Upload size={32} className="text-slate-400 mb-2" />
                                                <p className="text-xs text-slate-500 font-medium">Click to upload image</p>
                                            </div>
                                        )}
                                        
                                        {/* Hidden File Input */}
                                        <input 
                                            type="file" 
                                            ref={fileInputRef}
                                            onChange={handleImageUpload} 
                                            accept="image/*"
                                            className="hidden" 
                                        />

                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-slate-200"></div>
                                            </div>
                                            <div className="relative flex justify-center text-xs">
                                                <span className="px-2 bg-slate-50 text-slate-400">OR</span>
                                            </div>
                                        </div>

                                        <input 
                                            name="image" 
                                            value={formData.image?.startsWith('data:') ? '' : formData.image} 
                                            onChange={handleInputChange} 
                                            className="w-full border border-slate-200 p-3 rounded-lg text-xs focus:ring-2 focus:ring-gold-500 outline-none" 
                                            placeholder="Paste image URL..." 
                                        />
                                    </div>
                                </div>
                            </div>
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
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2"><Plus size={18} className="text-gold-500"/> Invite New Member</h3>
                        <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
                            <div className="lg:col-span-1">
                                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Full Name</label>
                                <input required value={newUser.name} onChange={e => setNewUser({...newUser, name: e.target.value})} className="w-full border border-slate-200 p-3 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 outline-none" placeholder="e.g. Sok Piseth" />
                            </div>
                            <div className="lg:col-span-1">
                                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Email</label>
                                <input required type="email" value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} className="w-full border border-slate-200 p-3 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 outline-none" placeholder="email@dagrand.net" />
                            </div>
                            <div className="lg:col-span-1">
                                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Temp Password</label>
                                <input required type="text" value={newUser.password} onChange={e => setNewUser({...newUser, password: e.target.value})} className="w-full border border-slate-200 p-3 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 outline-none" placeholder="Set initial password" />
                            </div>
                             <div className="lg:col-span-1">
                                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Role</label>
                                <select value={newUser.role} onChange={e => setNewUser({...newUser, role: e.target.value as any})} className="w-full border border-slate-200 p-3 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 outline-none bg-white">
                                    <option value="editor">Editor</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="lg:col-span-1">
                                <button type="submit" className="w-full bg-brand-900 text-white py-3 rounded-lg text-sm font-bold hover:bg-brand-800 shadow-md">Add User</button>
                            </div>
                        </form>
                    </div>

                    {/* Users List - Responsive */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
                        {/* Desktop Table View */}
                        <table className="w-full text-left hidden md:table">
                            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase font-bold tracking-wider">
                                <tr>
                                    <th className="p-5">Name</th>
                                    <th className="p-5">Role</th>
                                    <th className="p-5">Credentials (Simulation)</th>
                                    <th className="p-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {users.map(u => (
                                    <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-900 font-bold shadow-sm">{u.avatar}</div>
                                                <div>
                                                    <div className="font-bold text-brand-900 text-sm">{u.name}</div>
                                                    <div className="text-xs text-slate-400">{u.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${u.role === 'admin' ? 'bg-purple-50 text-purple-600 border border-purple-100' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                                                {u.role}
                                            </span>
                                        </td>
                                        <td className="p-5 text-xs font-mono text-slate-500">
                                            <span className="bg-slate-100 px-2 py-1 rounded">Pass: {u.password}</span>
                                        </td>
                                        <td className="p-5 text-right">
                                            {u.id !== user.id ? (
                                                <button onClick={() => deleteUser(u.id)} className="text-slate-400 hover:text-red-500 transition-colors bg-white hover:bg-red-50 p-2 rounded-lg border border-transparent hover:border-red-100"><Trash2 size={18}/></button>
                                            ) : (
                                                <span className="text-xs text-slate-400 italic bg-slate-50 px-2 py-1 rounded">Current</span>
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
                <div className="animate-fade-in-up">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-900">Dashboard</h1>
                            <p className="text-slate-500 mt-1">Welcome back, <span className="font-bold text-brand-900">{user?.name}</span>!</p>
                        </div>
                        <button onClick={() => { setCurrentView('create-article'); resetForm(); }} className="w-full md:w-auto bg-brand-900 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-brand-900/20 hover:bg-brand-800 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5">
                            <Plus size={18} /> Create New Post
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                            <div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Articles</p>
                                <p className="text-4xl font-serif font-bold text-brand-900 group-hover:text-gold-600 transition-colors">{articles.length}</p>
                            </div>
                            <div className="w-14 h-14 bg-brand-50 text-brand-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><FileText size={28}/></div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                            <div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Team Members</p>
                                <p className="text-4xl font-serif font-bold text-brand-900 group-hover:text-gold-600 transition-colors">{users.length}</p>
                            </div>
                             <div className="w-14 h-14 bg-brand-50 text-brand-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><Users size={28}/></div>
                        </div>
                         <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                            <div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Categories</p>
                                <p className="text-4xl font-serif font-bold text-brand-900 group-hover:text-gold-600 transition-colors">4</p>
                            </div>
                             <div className="w-14 h-14 bg-brand-50 text-brand-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"><LayoutDashboard size={28}/></div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
                         <div className="p-6 border-b border-slate-100 bg-white sticky top-0">
                            <h3 className="font-bold text-brand-900 text-lg">Recent Publications</h3>
                         </div>
                        {/* Desktop Table */}
                        <table className="w-full text-left border-collapse hidden md:table">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200 font-bold">
                                    <th className="p-5 pl-8">Title</th>
                                    <th className="p-5">Category</th>
                                    <th className="p-5">Date</th>
                                    <th className="p-5 text-right pr-8">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {articles.map(article => (
                                    <tr key={article.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="p-5 pl-8">
                                            <div className="font-bold text-brand-900 text-base mb-1 group-hover:text-gold-600 transition-colors">{article.title}</div>
                                            <div className="text-xs text-slate-400 flex items-center gap-2">
                                                <span className="flex items-center gap-1"><UserIcon size={12}/> {article.author}</span>
                                                {article.author === user?.name && <span className="bg-gold-100 text-gold-700 px-1.5 rounded-[2px] font-bold text-[10px]">YOU</span>}
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-bold uppercase border border-slate-200">{article.category}</span>
                                        </td>
                                        <td className="p-5 text-sm text-slate-600 font-medium">{article.date}</td>
                                        <td className="p-5 pr-8 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button 
                                                    onClick={() => handleEditClick(article)}
                                                    className="p-2 text-slate-400 hover:text-brand-900 hover:bg-white border border-transparent hover:border-slate-200 rounded-lg transition-all"
                                                    title="Edit Article"
                                                >
                                                    <Edit size={18} />
                                                </button>
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
                                                    className={`p-2 rounded-lg transition-all border border-transparent ${user?.role === 'admin' ? 'text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100' : 'text-slate-200 cursor-not-allowed'}`}
                                                    title="Delete Article"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Mobile Card View */}
                        <div className="md:hidden divide-y divide-slate-100">
                            {articles.map(article => (
                                <div key={article.id} className="p-5 flex flex-col gap-3">
                                    <div className="flex justify-between items-start">
                                        <div className="font-bold text-brand-900 text-lg line-clamp-2">{article.title}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded-full font-bold uppercase border border-slate-200">{article.category}</span>
                                        <span className="text-xs text-slate-400">{article.date}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-50">
                                        <div className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                                            <UserIcon size={12}/> {article.author}
                                        </div>
                                        <div className="flex gap-2">
                                             <button 
                                                onClick={() => handleEditClick(article)}
                                                className="p-2 bg-slate-50 text-slate-500 rounded-lg"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button 
                                                onClick={() => {
                                                    if (user?.role !== 'admin') return;
                                                    deleteArticle(article.id);
                                                }}
                                                className={`p-2 bg-red-50 text-red-500 rounded-lg ${user?.role !== 'admin' && 'opacity-50'}`}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
