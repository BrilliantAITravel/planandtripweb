import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Plane, AlertCircle } from 'lucide-react';

interface LoginProps {
  onLogin: (name: string) => void;
  onSignupClick?: () => void;
}

export function Login({ onLogin, onSignupClick }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // If validation passes, proceed to next page
    onLogin(email.split('@')[0]);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md'>
        <Plane className='h-12 w-12 text-purple-600 mx-auto mb-4' />
        <h2 className='text-3xl font-bold text-center mb-2'>Welcome Back</h2>
        <p className='text-center text-gray-600 mb-8'>Sign in to continue your journey</p>
        
        {error && (
          <div className='mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700'>
            <AlertCircle className='w-5 h-5 flex-shrink-0' />
            <span className='text-sm'>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Email</label>
            <div className='relative'>
              <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <input 
                type='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' 
                placeholder='your@email.com'
              />
            </div>
          </div>
          
          <div>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Password</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <input 
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none' 
                placeholder=''
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

          <div className='flex items-center justify-between text-sm'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type='checkbox' className='w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500' />
              <span className='text-gray-600'>Remember me</span>
            </label>
            <button type='button' className='text-purple-600 hover:text-purple-700 font-medium'>
              Forgot password?
            </button>
          </div>

          <button 
            type='submit' 
            className='w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg'
          >
            Sign In
          </button>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-gray-600'>
            Don't have an account?{' '}
            <button onClick={onSignupClick} className='text-purple-600 hover:text-purple-700 font-semibold'>
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
