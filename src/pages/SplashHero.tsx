import React from 'react';
import { motion } from 'framer-motion';
import { Bell, User } from 'lucide-react';

interface SplashHeroProps {
  onCTAClick: () => void;
}

export function SplashHero({ onCTAClick }: SplashHeroProps) {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Background Image */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
          filter: 'brightness(0.8)'
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30' />
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col min-h-screen'>
        {/* Header */}
        <header className='flex items-center justify-between px-8 py-6'>
          <div className='flex items-center gap-4'>
            <div className='w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20'>
              <svg className='w-10 h-10 text-white' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <path d='M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' />
                <polyline points='9 22 9 12 15 12 15 22' />
              </svg>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-white'>plan & trip</h1>
              <p className='text-sm text-white/80 italic'>Redefining Vacations...</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <button className='w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20'>
              <Bell className='w-6 h-6 text-white' />
            </button>
            <button 
              onClick={onCTAClick}
              className='w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20'
            >
              <User className='w-6 h-6 text-white' />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className='flex-1 flex flex-col items-center justify-center px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 
              className='text-8xl font-bold text-white mb-6'
              style={{
                fontFamily: 'cursive',
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                lineHeight: '1.1'
              }}
            >
              Explore
            </h2>
            <div className='space-y-2'>
              <p className='text-3xl text-white font-light'>
                THIS
              </p>
              <p className='text-3xl text-white font-light'>
                WONDERFUL
              </p>
              <p className='text-5xl text-white font-semibold mt-2'>
                WORLD with us
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className='mt-8 text-xl text-white/90 max-w-3xl'
          >
            Discover breathtaking destinations and create unforgettable memories with AI-powered travel planning
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCTAClick}
            className='mt-12 px-12 py-4 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-lg font-semibold hover:bg-white transition-all shadow-2xl'
          >
            Start Exploring
          </motion.button>
        </div>

        {/* Bottom Info */}
        <div className='pb-8 text-center'>
          <p className='text-white/60 text-sm'>Scroll down to discover more</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='mt-2'
          >
            <svg className='w-6 h-6 mx-auto text-white/60' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
