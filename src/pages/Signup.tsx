import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Plane, AlertCircle, User, Phone } from 'lucide-react';

interface SignupProps {
  onSignup: (name: string) => void;
  onSwitchToLogin: () => void;
}

export function Signup({ onSignup, onSwitchToLogin }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!formData.email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    if (!formData.phone.trim()) {
      setError('Please enter your phone number');
      return;
    }

    if (formData.phone.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }

    if (!formData.password.trim()) {
      setError('Please enter a password');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // If validation passes, proceed
    onSignup(formData.name);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md'>
        <Plane className='h-12 w-12 text-purple-600 mx-auto mb-4' />
        <h2 className='text-3xl font-bold text-center mb-2'>Create Account</h2>
        <p className='text-center text-gray-600 mb-8'>Start your journey with us</p>
        
        {error && (
          <div className='mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700'>
            <AlertCircle className='w-5 h-5 flex-shrink-0' />
            <span className='text-sm'>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Full Name</label>
            <div className='relative'>
              <User className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <input 
                type='text' 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' 
                placeholder='John Doe'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Email</label>
            <div className='relative'>
              <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <input 
                type='email' 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' 
                placeholder='your@email.com'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Phone Number</label>
            <div className='relative'>
              <Phone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <input 
                type='tel' 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' 
                placeholder='+1 234 567 8900'
              />
            </div>
          </div>
          
          <div>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Password</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <input 
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' 
                placeholder='••••••••'
              />
              <button 
                type='button' 
                onClick={() => setShowPassword(!showPassword)} 
                className='absolute right-3 top-3 text-gray-400 hover:text-gray-600'
              >
                {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
              </button>
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Confirm Password</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <input 
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' 
                placeholder='••••••••'
              />
              <button 
                type='button' 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                className='absolute right-3 top-3 text-gray-400 hover:text-gray-600'
              >
                {showConfirmPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
              </button>
            </div>
          </div>

          <button 
            type='submit' 
            className='w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg mt-6'
          >
            Create Account
          </button>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-gray-600'>
            Already have an account?{' '}
            <button 
              onClick={onSwitchToLogin}
              className='text-purple-600 hover:text-purple-700 font-semibold'
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
