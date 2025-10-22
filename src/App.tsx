import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SplashHero } from './pages/SplashHero';
import { Signup } from './pages/Signup';
import { TrendingDiscovery } from './pages/TrendingDiscovery';
import { Login } from './pages/Login';
import { DestinationDetails } from './pages/DestinationDetails';
import { PackageListing } from './pages/PackageListing';
import { PlannerStep1 } from './pages/PlannerStep1';
import { PlannerStep2 } from './pages/PlannerStep2';
import { PlannerStep3 } from './pages/PlannerStep3';
import { PlannerStep4 } from './pages/PlannerStep4';
import { SummaryCheckout } from './pages/SummaryCheckout';

type Screen = 
  | 'splash'
  | 'signup'
  | 'login'
  | 'trending'
  | 'destination-details'
  | 'packages'
  | 'planner-step1'
  | 'planner-step2'
  | 'planner-step3'
  | 'planner-step4'
  | 'checkout';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [navigationHistory, setNavigationHistory] = useState<Screen[]>(['splash']);
  const [selectedDestination, setSelectedDestination] = useState<string>('1');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Update page title based on current screen
  useEffect(() => {
    const titles: Record<Screen, string> = {
      splash: 'Plan & Trip - Explore the World',
      signup: 'Sign Up - Plan & Trip',
      login: 'Login - Plan & Trip',
      trending: 'Trending Destinations - Plan & Trip',
      'destination-details': 'Destination Details - Plan & Trip',
      packages: 'Tour Packages - Plan & Trip',
      'planner-step1': 'Plan Your Trip - Step 1',
      'planner-step2': 'Plan Your Trip - Step 2',
      'planner-step3': 'Plan Your Trip - Step 3',
      'planner-step4': 'Plan Your Trip - Step 4',
      checkout: 'Checkout - Plan & Trip',
    };
    document.title = titles[currentScreen] || 'Plan & Trip';
  }, [currentScreen]);

  // Navigate to screen and track history
  const navigateTo = (screen: Screen) => {
    setNavigationHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
  };

  // Go back to previous screen
  const goBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop(); // Remove current screen
      const previousScreen = newHistory[newHistory.length - 1];
      setNavigationHistory(newHistory);
      setCurrentScreen(previousScreen);
    }
  };

  const handleSplashCTA = () => {
    navigateTo('login');
  };

  const handleSignupClick = () => {
    navigateTo('signup');
  };

  const handleSignup = (name: string) => {
    setUserName(name);
    navigateTo('login');
  };

  const handleSwitchToLogin = () => {
    navigateTo('login');
  };

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    navigateTo('trending');
  };

  const handleHomeClick = () => {
    setNavigationHistory(['splash']);
    setCurrentScreen('splash');
  };

  const handleDestinationClick = (destinationId: string) => {
    setSelectedDestination(destinationId);
    navigateTo('destination-details');
  };

  const handlePlanTrip = () => {
    navigateTo('planner-step1');
  };

  const handleStep1Next = () => {
    navigateTo('planner-step2');
  };

  const handleStep2Next = () => {
    navigateTo('planner-step3');
  };

  const handleStep3Next = () => {
    navigateTo('planner-step4');
  };

  const handleStep4Next = () => {
    navigateTo('checkout');
  };

  return (
    <div className='min-h-screen bg-slate-900'>
      <AnimatePresence mode='wait'>
        {currentScreen === 'splash' && (
          <motion.div key='splash' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <SplashHero onCTAClick={handleSplashCTA} />
          </motion.div>
        )}

        {currentScreen === 'signup' && (
          <motion.div key='signup' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Signup onSignup={handleSignup} onSwitchToLogin={handleSwitchToLogin} />
          </motion.div>
        )}

        {currentScreen === 'login' && (
          <motion.div key='login' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Login onLogin={handleLogin} onSignupClick={handleSignupClick} />
          </motion.div>
        )}

        {currentScreen === 'trending' && (
          <motion.div key='trending' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <TrendingDiscovery 
              onDestinationClick={handleDestinationClick}
              isLoggedIn={isLoggedIn}
              userName={userName}
              onHomeClick={handleHomeClick}
            />
          </motion.div>
        )}

        {currentScreen === 'destination-details' && (
          <motion.div key='destination-details' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <DestinationDetails 
              destinationId={selectedDestination} 
              onPlanTrip={handlePlanTrip}
              isLoggedIn={isLoggedIn}
              userName={userName}
              onBack={goBack}
            />
          </motion.div>
        )}

        {currentScreen === 'packages' && (
          <motion.div key='packages' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <PackageListing isLoggedIn={isLoggedIn} userName={userName} onBack={goBack} />
          </motion.div>
        )}

        {currentScreen === 'planner-step1' && (
          <motion.div key='planner-step1' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <PlannerStep1 onNext={handleStep1Next} isLoggedIn={isLoggedIn} userName={userName} onBack={goBack} />
          </motion.div>
        )}

        {currentScreen === 'planner-step2' && (
          <motion.div key='planner-step2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <PlannerStep2 onNext={handleStep2Next} onBack={goBack} isLoggedIn={isLoggedIn} userName={userName} />
          </motion.div>
        )}

        {currentScreen === 'planner-step3' && (
          <motion.div key='planner-step3' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <PlannerStep3 onNext={handleStep3Next} onBack={goBack} isLoggedIn={isLoggedIn} userName={userName} />
          </motion.div>
        )}

        {currentScreen === 'planner-step4' && (
          <motion.div key='planner-step4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <PlannerStep4 onNext={handleStep4Next} onBack={goBack} isLoggedIn={isLoggedIn} userName={userName} />
          </motion.div>
        )}

        {currentScreen === 'checkout' && (
          <motion.div key='checkout' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <SummaryCheckout onBack={goBack} isLoggedIn={isLoggedIn} userName={userName} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Navigation - Available After Login */}
      {isLoggedIn && (
        <motion.div className='fixed bottom-6 left-6 z-50'>
          <motion.button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className='bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 text-white hover:bg-slate-700/90 transition-colors flex items-center gap-2 shadow-lg'
          >
            <span className='font-semibold'>Quick Navigation</span>
            {isNavOpen ? <ChevronDown className='w-5 h-5' /> : <ChevronUp className='w-5 h-5' />}
          </motion.button>

          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scaleY: 0 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: 10, scaleY: 0 }}
                transition={{ duration: 0.2 }}
                className='absolute bottom-full left-0 mb-2 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 max-w-xs origin-bottom'
              >
                <div className='flex flex-wrap gap-2'>
                  <button onClick={() => { navigateTo('trending'); setIsNavOpen(false); }} className='px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors text-sm'>Trending</button>
                  <button onClick={() => { navigateTo('packages'); setIsNavOpen(false); }} className='px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors text-sm'>Packages</button>
                  <button onClick={() => { navigateTo('destination-details'); setIsNavOpen(false); }} className='px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors text-sm'>Destination</button>
                  <button onClick={() => { navigateTo('planner-step1'); setIsNavOpen(false); }} className='px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors text-sm'>Plan Trip</button>
                  <button onClick={() => { navigateTo('checkout'); setIsNavOpen(false); }} className='px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors text-sm'>Checkout</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
