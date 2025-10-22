import React, { useState } from 'react';
import { Plane, ArrowLeft } from 'lucide-react';
import { UserProfileMenu } from './UserProfileMenu';

interface GlobalHeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
  onBack?: () => void;
  showBackButton?: boolean;
}

export function GlobalHeader({ isLoggedIn, userName, onBack, showBackButton = false }: GlobalHeaderProps) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <>
      <header className='bg-slate-900 border-b border-slate-800 sticky top-0 z-50'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              {showBackButton && onBack && (
                <button onClick={onBack} className='p-2 hover:bg-slate-800 rounded-lg transition-colors'>
                  <ArrowLeft className='w-6 h-6 text-white' />
                </button>
              )}
              <div className='flex items-center space-x-2'>
                <Plane className='h-8 w-8 text-blue-500' />
                <span className='text-2xl font-bold text-white'>Plan & Trip</span>
              </div>
            </div>
            
            {isLoggedIn && userName ? (
              <button onClick={() => setIsProfileMenuOpen(true)} className='flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700 hover:border-slate-600 transition-colors'>
                <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className='text-white font-medium'>{userName}</span>
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <UserProfileMenu isOpen={isProfileMenuOpen} onClose={() => setIsProfileMenuOpen(false)} userName={userName || 'User'} userEmail={`${userName?.toLowerCase()}@email.com`} />
    </>
  );
}
