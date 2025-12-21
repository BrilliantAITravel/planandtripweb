import React, { useState } from 'react';
import { 
  User, Settings, Users, CreditCard, Gift, Map, Camera, 
  Wallet, HelpCircle, Shield, X, MessageCircle,
  ArrowLeft, Menu
} from 'lucide-react';

function UserProfileMenu({ isOpen, onClose, userName, userEmail }) {
  const [currentScreen, setCurrentScreen] = useState('profile');

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'preferences', label: 'My preferences', icon: Settings },
    { id: 'partners', label: 'My travel partners', icon: Users },
    { id: 'essentials', label: 'My essentials', icon: CreditCard },
    { id: 'rewards', label: 'My Rewards', icon: Gift },
    { id: 'plans', label: 'My plans', icon: Map },
    { id: 'memories', label: 'My travel memories', icon: Camera },
    { id: 'wallet', label: 'My wallet', icon: Wallet },
    { id: 'support', label: 'Support & guidance', icon: HelpCircle },
    { id: 'security', label: 'My Security', icon: Shield },
    { id: 'settings', label: 'Application Settings', icon: Settings },
  ];

  const userStats = {
    countriesVisited: 21,
    itinerariesViewed: 144,
    itinerariesPlanned: 35,
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className='fixed inset-0 bg-black/80 z-50'
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />

      {/* Main Container */}
      <div
        className='fixed inset-0 z-50 flex'
        style={{ animation: 'slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {/* Left Sidebar Navigation */}
        <div className='w-56 bg-slate-900 flex flex-col'>
          {/* Menu Items */}
          <nav className='flex-1 overflow-y-auto py-4'>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentScreen(item.id)}
                  className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
                    isActive
                      ? 'bg-slate-800 text-white border-l-4 border-orange-500'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <Icon className='w-5 h-5 flex-shrink-0' />
                  <span className='text-sm font-medium'>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className='flex-1 bg-slate-800 flex'>
          {/* Content Panel */}
          <div className='flex-1 overflow-y-auto'>
            {/* Header with Title and Close Button */}
            <div className='bg-slate-900 px-8 py-6 flex items-center justify-between border-b border-slate-700'>
              <h2 className='text-2xl font-bold text-white'>
                {menuItems.find(i => i.id === currentScreen)?.label}
              </h2>
              <button
                onClick={onClose}
                className='p-2 hover:bg-slate-800 rounded-lg transition-colors'
              >
                <X className='w-6 h-6 text-white' />
              </button>
            </div>

            {/* Content */}
            <div className='p-8'>
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
              {!['profile', 'preferences', 'partners', 'essentials'].includes(currentScreen) && (
                <div className='text-white text-center py-20'>
                  <p className='text-slate-400'>This section is coming soon...</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Statistics Sidebar */}
          <div className='w-64 bg-slate-900 border-l border-slate-700 p-6 flex flex-col'>
            <h3 className='text-lg font-bold text-white mb-6'>My Statistics</h3>
            
            {/* User Avatar */}
            <div className='flex items-center gap-3 mb-8'>
              <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                {userName.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className='text-white font-semibold text-sm'>{userName}</p>
                <p className='text-slate-400 text-xs'>29</p>
              </div>
            </div>

            {/* Stats */}
            <div className='space-y-6 flex-1'>
              <div>
                <p className='text-slate-400 text-xs mb-1'>Countries Visited</p>
                <p className='text-3xl font-bold text-white'>{userStats.countriesVisited}</p>
              </div>
              <div>
                <p className='text-slate-400 text-xs mb-1'>Itineraries Viewed</p>
                <p className='text-3xl font-bold text-white'>{userStats.itinerariesViewed}</p>
              </div>
              <div>
                <p className='text-slate-400 text-xs mb-1'>Itineraries Planned</p>
                <p className='text-3xl font-bold text-white'>{userStats.itinerariesPlanned}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='space-y-3 mt-8'>
              <button className='w-full p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors flex items-center justify-center border border-slate-600'>
                <MessageCircle className='w-5 h-5 text-white' />
              </button>
              <button className='w-full p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors flex items-center justify-center border border-slate-600'>
                <ArrowLeft className='w-5 h-5 text-white' />
              </button>
              <button className='w-full p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors flex items-center justify-center border border-slate-600'>
                <Menu className='w-5 h-5 text-white' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

function ProfileContent({ userName, userEmail }) {
  return (
    <div className='max-w-4xl'>
      <div className='space-y-6'>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Name</label>
            <input 
              type='text' 
              defaultValue={userName} 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Phone number</label>
            <input 
              type='tel' 
              defaultValue='+91 769854623' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Email ID</label>
            <input 
              type='email' 
              defaultValue={userEmail || 'user@email.com'} 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Location</label>
            <input 
              type='text' 
              defaultValue='Bangalore' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Age</label>
            <input 
              type='number' 
              defaultValue='29' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Gender</label>
            <select className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Social Media Link 1</label>
            <input 
              type='url' 
              defaultValue='www.facebook.com/travelplace.ikrt' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Social Media Link 2</label>
            <input 
              type='url' 
              defaultValue='www.instagram.com/TravelLeisure' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PreferencesContent() {
  return (
    <div className='max-w-4xl'>
      <div className='space-y-6'>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Budget Category</label>
            <select className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
              <option>2-3 Lakhs</option>
              <option>3-5 Lakhs</option>
              <option>5+ Lakhs</option>
            </select>
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>commute/transport preferences</label>
            <select className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
              <option>Cruise and Train</option>
              <option>Flight</option>
              <option>Car</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>stay preferences</label>
            <select className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
              <option>City Centers</option>
              <option>Beach Resorts</option>
              <option>Mountain Lodges</option>
            </select>
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>trip category</label>
            <select className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
              <option>Family</option>
              <option>Solo</option>
              <option>Friends</option>
            </select>
          </div>
        </div>

        <div>
          <label className='block text-slate-300 text-sm mb-2'>Food preference</label>
          <select className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
            <option>Veg, Jain</option>
            <option>Non-Veg</option>
            <option>Vegan</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function PartnersContent() {
  const partners = [
    { name: 'Mudit', trips: 35, color: 'bg-red-600' },
    { name: 'Ashwani', trips: 28, color: 'bg-teal-600' },
  ];

  return (
    <div className='max-w-4xl'>
      <div className='mb-8'>
        <h3 className='text-white text-sm font-semibold mb-4'>Partners from past bookings</h3>
        <div className='flex gap-4'>
          {partners.map((partner) => (
            <div key={partner.name} className={`${partner.color} p-4 rounded-lg flex items-center justify-between w-32`}>
              <div>
                <p className='text-white font-semibold text-sm'>{partner.name}</p>
                <p className='text-white/80 text-xs'>{partner.trips}</p>
              </div>
              <button className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors'>
                <span className='text-white text-lg leading-none'>+</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='space-y-6'>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Name</label>
            <input 
              type='text' 
              defaultValue='Ashwani' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Phone number</label>
            <input 
              type='tel' 
              defaultValue='+91 769854623' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Email ID</label>
            <input 
              type='email' 
              defaultValue='Ashwani21@gmail.com' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Location</label>
            <input 
              type='text' 
              defaultValue='Bangalore' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Age</label>
            <input 
              type='number' 
              defaultValue='29' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Gender</label>
            <select className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function EssentialsContent() {
  return (
    <div className='max-w-4xl'>
      <div className='space-y-6'>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Card Name</label>
            <input 
              type='text' 
              defaultValue='Mudit' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Card Number</label>
            <div className='relative'>
              <input 
                type='text' 
                defaultValue='5764 9968 6789 0234' 
                className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16' 
              />
              <div className='absolute right-3 top-1/2 -translate-y-1/2 flex gap-1'>
                <div className='w-7 h-5 bg-red-500 rounded'></div>
                <div className='w-7 h-5 bg-orange-400 rounded'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-6'>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Expiry</label>
            <input 
              type='text' 
              defaultValue='04 / 26' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>CCV Code</label>
            <input 
              type='text' 
              defaultValue='654' 
              className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>
          <div>
            <label className='block text-slate-300 text-sm mb-2'>Coupon Code</label>
            <div className='flex gap-2'>
              <input 
                type='text' 
                defaultValue='GODFREY-20-OFF' 
                className='flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
              />
              <button className='px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm whitespace-nowrap'>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export UserProfileMenu as named export for use in other files
export { UserProfileMenu };

// Demo App component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8'>
      <button
        onClick={() => setIsMenuOpen(true)}
        className='px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold'
      >
        Open Profile Menu
      </button>

      <UserProfileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        userName='Robert'
        userEmail='mudit01@gmail.com'
      />
    </div>
  );
}