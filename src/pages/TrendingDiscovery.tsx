import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserProfileMenu } from '../components/UserProfileMenu';
import { ChevronLeft, ChevronRight, MapPin, Users, Plane, TrendingUp, Info, Heart, MessageCircle, Search, Menu } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Seoul, South Korea',
    description: 'A vibrant mix of modern skyscrapers, traditional temples, and street markets',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800',
    population: '1.2 M',
    attractions: '50',
    hotels: '15',
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'Experience the perfect blend of ancient traditions and cutting-edge technology',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    population: '9.7 M',
    attractions: '120',
    hotels: '45',
  },
  {
    id: 3,
    name: 'Paris, France',
    description: 'The city of lights, love, and timeless elegance',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    population: '2.1 M',
    attractions: '85',
    hotels: '30',
  },
  {
    id: 4,
    name: 'Dubai, UAE',
    description: 'Where luxury meets innovation in the desert',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    population: '3.3 M',
    attractions: '65',
    hotels: '50',
  },
];

interface TrendingDiscoveryProps {
  onDestinationClick: (id: string) => void;
  isLoggedIn?: boolean;
  userName?: string;
  onHomeClick?: () => void;
}

export function TrendingDiscovery({ onDestinationClick, isLoggedIn, userName, onHomeClick }: TrendingDiscoveryProps) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = destinations.length - 1;
      if (newIndex >= destinations.length) newIndex = 0;
      return newIndex;
    });
  };

  const currentDestination = destinations[currentIndex];

  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Background with Real Image */}
      <div className='absolute inset-0'>
        {/* Background Image with Parallax */}
        <motion.div 
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80)',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40' />
        
        {/* Animated Light Spots */}
        <motion.div
          className='absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30'
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30'
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30'
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating Small Travel Photos */}
        <motion.div
          className='absolute top-20 left-10 w-32 h-32 rounded-2xl overflow-hidden opacity-20 shadow-2xl'
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200' alt='' className='w-full h-full object-cover' />
        </motion.div>

        <motion.div
          className='absolute top-40 right-20 w-40 h-40 rounded-2xl overflow-hidden opacity-20 shadow-2xl'
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <img src='https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=200' alt='' className='w-full h-full object-cover' />
        </motion.div>

        <motion.div
          className='absolute bottom-20 left-1/4 w-36 h-36 rounded-2xl overflow-hidden opacity-20 shadow-2xl'
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <img src='https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=200' alt='' className='w-full h-full object-cover' />
        </motion.div>

        <motion.div
          className='absolute top-1/3 right-1/4 w-28 h-28 rounded-2xl overflow-hidden opacity-20 shadow-2xl'
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <img src='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=200' alt='' className='w-full h-full object-cover' />
        </motion.div>

        <motion.div
          className='absolute bottom-32 right-10 w-32 h-32 rounded-2xl overflow-hidden opacity-20 shadow-2xl'
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 9, repeat: Infinity }}
        >
          <img src='https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200' alt='' className='w-full h-full object-cover' />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-white rounded-full opacity-40'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10'>
        {/* Header */}
        <div className='absolute top-0 left-0 right-0 z-20 px-6 py-6 flex items-center justify-between'>
          <button 
            onClick={onHomeClick}
            className='flex items-center gap-4 hover:opacity-80 transition-opacity'
          >
            <div className='text-left'>
              <h1 className='text-2xl font-bold text-white drop-shadow-lg'>plan & trip</h1>
              <p className='text-sm text-white/90 italic drop-shadow-lg'>Redefining Vacations...</p>
            </div>
          </button>
          
          {isLoggedIn && userName ? (
            <button onClick={() => setIsProfileMenuOpen(true)} className='flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 hover:bg-white transition-colors cursor-pointer'>
              <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className='text-gray-800 font-medium'>{userName}</span>
            </button>
          ) : (
            <button className='px-6 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-gray-800 hover:bg-white transition-colors font-medium'>
              Login / Sign up
            </button>
          )}
        </div>

        {/* Main Content */}
        <div className='flex items-center justify-center min-h-screen pt-24 pb-16'>
          <div className='w-full max-w-7xl px-6'>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className='text-7xl font-bold text-center mb-12 text-white drop-shadow-2xl' 
              style={{ 
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                fontFamily: 'cursive'
              }}
            >
              Trending Destination
            </motion.h2>

            <div className='relative'>
              <button 
                onClick={() => paginate(-1)} 
                className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors' 
                style={{ left: '-60px' }}
              >
                <ChevronLeft className='w-8 h-8 text-white' />
              </button>

              <div className='relative h-[500px] flex items-center justify-center'>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div 
                    key={currentIndex} 
                    custom={direction} 
                    variants={slideVariants} 
                    initial='enter' 
                    animate='center' 
                    exit='exit' 
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }} 
                    drag='x' 
                    dragConstraints={{ left: 0, right: 0 }} 
                    dragElastic={1} 
                    onDragEnd={(e, { offset, velocity }) => { 
                      const swipe = swipePower(offset.x, velocity.x); 
                      if (swipe < -swipeConfidenceThreshold) { 
                        paginate(1); 
                      } else if (swipe > swipeConfidenceThreshold) { 
                        paginate(-1); 
                      }
                    }} 
                    className='absolute w-full max-w-4xl'
                  >
                    <div className='relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20'>
                      <div className='relative h-80'>
                        <img 
                          src={currentDestination.image} 
                          alt={currentDestination.name} 
                          className='w-full h-full object-cover'
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800';
                          }}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                        
                        <div className='absolute top-4 right-4 flex gap-3'>
                          <div className='bg-slate-700/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-white'>
                            <Users className='w-4 h-4' />
                            <span className='font-semibold'>{currentDestination.population}</span>
                          </div>
                          <div className='bg-slate-700/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-white'>
                            <Plane className='w-4 h-4' />
                            <span className='font-semibold'>{currentDestination.attractions}</span>
                          </div>
                          <div className='bg-slate-700/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-white'>
                            <TrendingUp className='w-4 h-4' />
                            <span className='font-semibold'>{currentDestination.hotels}</span>
                          </div>
                        </div>
                        
                        <div className='absolute top-4 right-4 mt-16 flex gap-2'>
                          <button className='bg-slate-700/80 backdrop-blur-sm p-3 rounded-full hover:bg-slate-600/80 transition-colors'>
                            <Info className='w-5 h-5 text-white' />
                          </button>
                          <button className='bg-slate-700/80 backdrop-blur-sm p-3 rounded-full hover:bg-slate-600/80 transition-colors'>
                            <Heart className='w-5 h-5 text-white' />
                          </button>
                        </div>
                        
                        <div className='absolute bottom-6 left-6'>
                          <div className='bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-3 rounded-full flex items-center gap-2'>
                            <MapPin className='w-5 h-5 text-white' />
                            <span className='text-white font-semibold text-lg'>{currentDestination.name}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className='p-6'>
                        <p className='text-white text-lg text-center'>{currentDestination.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button 
                onClick={() => paginate(1)} 
                className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors' 
                style={{ right: '-60px' }}
              >
                <ChevronRight className='w-8 h-8 text-white' />
              </button>
            </div>

            <div className='flex justify-center gap-2 mt-8'>
              {destinations.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => { 
                    setDirection(index > currentIndex ? 1 : -1); 
                    setCurrentIndex(index); 
                  }} 
                  className={'w-3 h-3 rounded-full transition-all ' + (index === currentIndex ? 'bg-white w-8' : 'bg-white/40')} 
                />
              ))}
            </div>

            <div className='flex justify-center mt-12'>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                onClick={() => onDestinationClick(currentDestination.id.toString())} 
                className='bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg flex items-center gap-2'
              >
                <TrendingUp className='w-6 h-6' />
                Plan your SMART trip
              </motion.button>
            </div>
          </div>
        </div>

        <div className='fixed bottom-8 right-8 flex flex-col gap-3 z-20'>
          <button className='bg-slate-700/80 backdrop-blur-sm p-4 rounded-full hover:bg-slate-600/80 transition-colors shadow-lg'>
            <MessageCircle className='w-6 h-6 text-white' />
          </button>
          <button className='bg-slate-700/80 backdrop-blur-sm p-4 rounded-full hover:bg-slate-600/80 transition-colors shadow-lg'>
            <Search className='w-6 h-6 text-white' />
          </button>
          <button className='bg-slate-700/80 backdrop-blur-sm p-4 rounded-full hover:bg-slate-600/80 transition-colors shadow-lg'>
            <Menu className='w-6 h-6 text-white' />
          </button>
        </div>
      </div>
          {/* User Profile Menu */}
      <UserProfileMenu
        isOpen={isProfileMenuOpen}
        onClose={() => setIsProfileMenuOpen(false)}
        userName={userName || 'User'}
        userEmail={`@email.com`}
      />

</div>
  );
}
