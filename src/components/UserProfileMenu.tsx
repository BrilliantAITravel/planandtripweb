import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Settings, Users, CreditCard, Gift, Map, Camera, 
  Wallet, HelpCircle, Shield, X, ChevronRight, MessageCircle,
  ArrowLeft, Menu as MenuIcon
} from 'lucide-react';

interface UserProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userEmail?: string;
}

type MenuScreen = 
  | 'profile'
  | 'preferences'
  | 'partners'
  | 'essentials'
  | 'rewards'
  | 'plans'
  | 'memories'
  | 'wallet'
  | 'support'
  | 'security'
  | 'settings';

export function UserProfileMenu({ isOpen, onClose, userName, userEmail }: UserProfileMenuProps) {
  const [currentScreen, setCurrentScreen] = useState<MenuScreen>('profile');

  const menuItems = [
    { id: 'profile' as MenuScreen, label: 'My Profile', icon: User },
    { id: 'preferences' as MenuScreen, label: 'My preferences', icon: Settings },
    { id: 'partners' as MenuScreen, label: 'My travel partners', icon: Users },
    { id: 'essentials' as MenuScreen, label: 'My essentials', icon: CreditCard },
    { id: 'rewards' as MenuScreen, label: 'My Rewards', icon: Gift },
    { id: 'plans' as MenuScreen, label: 'My plans', icon: Map },
    { id: 'memories' as MenuScreen, label: 'My travel memories', icon: Camera },
    { id: 'wallet' as MenuScreen, label: 'My wallet', icon: Wallet },
    { id: 'support' as MenuScreen, label: 'Support & guidance', icon: HelpCircle },
    { id: 'security' as MenuScreen, label: 'My Security', icon: Shield },
    { id: 'settings' as MenuScreen, label: 'Application Settings', icon: Settings },
  ];

  const userStats = {
    countriesVisited: 21,
    itineriesViewed: 144,
    itineriesPlanned: 35,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50'
          />

          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed right-0 top-0 h-full w-full max-w-6xl bg-slate-900 z-50 shadow-2xl flex'
          >
            {/* Sidebar */}
            <div className='w-64 bg-slate-950 border-r border-slate-800 p-6 flex flex-col'>
              {/* Close Button */}
              <button
                onClick={onClose}
                className='self-end p-2 hover:bg-slate-800 rounded-lg transition-colors mb-6'
              >
                <X className='w-6 h-6 text-white' />
              </button>

              {/* Menu Items */}
              <nav className='space-y-2 flex-1 overflow-y-auto'>
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentScreen === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentScreen(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                      }`}
                    >
                      <Icon className='w-5 h-5' />
                      <span className='text-sm font-medium'>{item.label}</span>
                      {isActive && (
                        <ChevronRight className='w-4 h-4 ml-auto' />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Main Content Area */}
            <div className='flex-1 flex'>
              {/* Content */}
              <div className='flex-1 overflow-y-auto p-8'>
                {currentScreen === 'profile' && (
                  <ProfileContent userName={userName} userEmail={userEmail} />
                )}
                {currentScreen === 'preferences' && (
                  <PreferencesContent />
                )}
                {currentScreen === 'partners' && (
                  <PartnersContent />
                )}
                {currentScreen === 'essentials' && (
                  <EssentialsContent />
                )}
              </div>

              {/* Statistics Sidebar */}
              <div className='w-80 bg-slate-950 border-l border-slate-800 p-6'>
                <h3 className='text-xl font-bold text-white mb-6'>My Statistics</h3>
                
                {/* User Avatar */}
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl'>
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className='text-white font-semibold'>{userName}</p>
                    <p className='text-slate-400 text-sm'>29</p>
                  </div>
                </div>

                {/* Stats */}
                <div className='space-y-6'>
                  <div>
                    <p className='text-slate-400 text-sm mb-2'>Countries Visited</p>
                    <p className='text-4xl font-bold text-white'>{userStats.countriesVisited}</p>
                  </div>
                  <div>
                    <p className='text-slate-400 text-sm mb-2'>Iteneries Viewed</p>
                    <p className='text-4xl font-bold text-white'>{userStats.itineriesViewed}</p>
                  </div>
                  <div>
                    <p className='text-slate-400 text-sm mb-2'>Iteneries Planned</p>
                    <p className='text-4xl font-bold text-white'>{userStats.itineriesPlanned}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='mt-auto pt-8 space-y-3'>
                  <button className='w-full p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors flex items-center justify-center'>
                    <MessageCircle className='w-6 h-6 text-white' />
                  </button>
                  <button className='w-full p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors flex items-center justify-center'>
                    <ArrowLeft className='w-6 h-6 text-white' />
                  </button>
                  <button className='w-full p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors flex items-center justify-center'>
                    <MenuIcon className='w-6 h-6 text-white' />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ProfileContent({ userName, userEmail }: { userName: string; userEmail?: string }) {
  return (
    <div>
      <h2 className='text-3xl font-bold text-white mb-8'>My Profile</h2>
      
      <div className='space-y-6'>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Name</label>
            <input type='text' defaultValue={userName} className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Phone number</label>
            <input type='tel' defaultValue='+91 769854623' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Email ID</label>
            <input type='email' defaultValue={userEmail || 'user@email.com'} className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Location</label>
            <input type='text' defaultValue='Banglore' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Age</label>
            <input type='number' defaultValue='29' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Gender</label>
            <select className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500'>
              <option>Male</option><option>Female</option><option>Other</option>
            </select>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Social Media Link 1</label>
            <input type='url' defaultValue='www.facebook.com/travelplace.ikrt' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Social Media Link 2</label>
            <input type='url' defaultValue='www.instagram.com/TravelLeisure' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
        </div>
      </div>
    </div>
  );
}

function PreferencesContent() {
  return (
    <div>
      <h2 className='text-3xl font-bold text-white mb-8'>My preferences</h2>
      <div className='space-y-6'>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Budget Category</label>
            <select className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500'>
              <option>2-3 Lakhs</option><option>3-5 Lakhs</option><option>5+ Lakhs</option>
            </select>
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>commute/transport preferences</label>
            <select className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500'>
              <option>Cruise and Train</option><option>Flight</option><option>Car</option>
            </select>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>stay preferences</label>
            <select className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500'>
              <option>City Centers</option><option>Beach Resorts</option><option>Mountain Lodges</option>
            </select>
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>trip category</label>
            <select className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500'>
              <option>Family</option><option>Solo</option><option>Friends</option>
            </select>
          </div>
        </div>
        <div>
          <label className='block text-slate-400 text-sm mb-2'>Food preference</label>
          <select className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500'>
            <option>Veg, Jain</option><option>Non-Veg</option><option>Vegan</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function PartnersContent() {
  const partners = [
    { name: 'Mudit', trips: 35, color: 'from-red-600 to-red-700' },
    { name: 'Ashwani', trips: 28, color: 'from-teal-600 to-teal-700' },
  ];
  return (
    <div>
      <h2 className='text-3xl font-bold text-white mb-8'>My travel partners</h2>
      <div className='mb-8'>
        <h3 className='text-lg font-semibold text-white mb-4'>Partners from past bookings</h3>
        <div className='flex gap-4'>
          {partners.map((partner) => (
            <div key={partner.name} className={`bg-gradient-to-br ${partner.color} p-4 rounded-lg flex items-center justify-between min-w-[150px]`}>
              <div>
                <p className='text-white font-semibold'>{partner.name}</p>
                <p className='text-white/80 text-sm'>{partner.trips}</p>
              </div>
              <button className='w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors'>
                <span className='text-white text-xl'>+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='space-y-6'>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Name</label>
            <input type='text' defaultValue='Ashwani' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Phone number</label>
            <input type='tel' defaultValue='+91 769854623' className='w-full px-4 py-3 bg-slate-800 border border-purple-500 rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-500' />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Email ID</label>
            <input type='email' defaultValue='Ashwani21@gmail.com' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Location</label>
            <input type='text' defaultValue='Banglore' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Age</label>
            <input type='number' defaultValue='29' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Gender</label>
            <select className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500'>
              <option>Male</option><option>Female</option><option>Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function EssentialsContent() {
  return (
    <div>
      <h2 className='text-3xl font-bold text-white mb-8'>My essentials</h2>
      <div className='space-y-6'>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Card Name</label>
            <input type='text' defaultValue='Mudit' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Card Number</label>
            <div className='relative'>
              <input type='text' defaultValue='5764 9968 6789 0234' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
              <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                <div className='flex gap-1'>
                  <div className='w-6 h-4 bg-red-500 rounded'></div>
                  <div className='w-6 h-4 bg-orange-500 rounded'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Expiry</label>
            <input type='text' defaultValue='04 / 26' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>CCV Code</label>
            <input type='text' defaultValue='654' className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
          <div>
            <label className='block text-slate-400 text-sm mb-2'>Coupon Code</label>
            <div className='flex gap-2'>
              <input type='text' defaultValue='GODFREY-20-OFF' className='flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500' />
              <button className='px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
