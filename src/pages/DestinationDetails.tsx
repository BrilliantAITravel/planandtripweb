import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Star, Heart, Share2, Clock, DollarSign, Plane, Camera } from 'lucide-react';
import { GlobalHeader } from '../components/GlobalHeader';

const destinationData = {
  '1': {
    id: '1',
    name: 'Seoul, South Korea',
    country: 'South Korea',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200',
    rating: 4.8,
    reviews: 2847,
    description: 'Experience the vibrant energy of Seoul, where ancient palaces stand alongside futuristic skyscrapers. Discover traditional markets, K-pop culture, and world-class cuisine in this dynamic Asian metropolis.',
    highlights: [
      'Visit Gyeongbokgung Palace',
      'Explore Myeongdong Shopping District',
      'Try authentic Korean BBQ',
      'Walk through Bukchon Hanok Village',
      'Experience Gangnam nightlife',
      'Visit N Seoul Tower'
    ],
    activities: ['City Tours', 'Food Tours', 'Temple Visits', 'Shopping', 'Nightlife', 'Cultural Shows'],
    bestTime: 'March to May, September to November',
    duration: '5-7 Days',
    budget: '$1200 - $2000',
    weather: '18°C - 25°C',
  },
  '2': {
    id: '2',
    name: 'Tokyo, Japan',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200',
    rating: 4.9,
    reviews: 3521,
    description: 'Immerse yourself in Tokyo blend of traditional culture and cutting-edge technology. From serene temples to bustling streets, Tokyo offers an unforgettable experience.',
    highlights: ['Senso-ji Temple', 'Shibuya Crossing', 'Tokyo Skytree', 'Tsukiji Fish Market', 'Harajuku Fashion', 'Mt. Fuji Day Trip'],
    activities: ['Sightseeing', 'Food Tours', 'Shopping', 'Temple Visits', 'Anime Culture', 'Day Trips'],
    bestTime: 'March to May, September to November',
    duration: '6-8 Days',
    budget: '$1500 - $2500',
    weather: '15°C - 28°C',
  }
};

interface DestinationDetailsProps {
  destinationId: string;
  onPlanTrip: () => void;
  isLoggedIn?: boolean;
  userName?: string;
  onBack?: () => void;
}

export function DestinationDetails({ destinationId, onPlanTrip, isLoggedIn, userName, onBack }: DestinationDetailsProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const destination = destinationData[destinationId as keyof typeof destinationData] || destinationData['1'];

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800'>
      {/* Header */}
      <GlobalHeader 
        isLoggedIn={isLoggedIn} 
        userName={userName} 
        onBack={onBack}
        showBackButton={true}
      />

      {/* Hero Image */}
      <div className='relative h-[500px] w-full'>
        <img 
          src={destination.image} 
          alt={destination.name} 
          className='w-full h-full object-cover'
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200';
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent'></div>
        
        {/* Floating Action Buttons */}
        <div className='absolute top-6 right-6 flex gap-3'>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className='bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg'
          >
            <Heart className={'w-6 h-6 ' + (isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700')} />
          </button>
          <button className='bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg'>
            <Share2 className='w-6 h-6 text-gray-700' />
          </button>
        </div>

        {/* Title Overlay */}
        <div className='absolute bottom-0 left-0 right-0 p-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex items-center gap-2 mb-2'>
              <MapPin className='w-5 h-5 text-cyan-400' />
              <span className='text-cyan-400 font-medium'>{destination.country}</span>
            </div>
            <h1 className='text-6xl font-bold text-white mb-4'>{destination.name}</h1>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
                <Star className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                <span className='text-white font-semibold'>{destination.rating}</span>
                <span className='text-slate-300'>({destination.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Description */}
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50'>
              <h2 className='text-3xl font-bold text-white mb-4'>About This Destination</h2>
              <p className='text-slate-300 text-lg leading-relaxed'>{destination.description}</p>
            </div>

            {/* Highlights */}
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50'>
              <h2 className='text-3xl font-bold text-white mb-6'>Top Highlights</h2>
              <div className='grid md:grid-cols-2 gap-4'>
                {destination.highlights.map((highlight, idx) => (
                  <div key={idx} className='flex items-center gap-3 bg-slate-900/50 p-4 rounded-lg'>
                    <div className='w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
                      <Camera className='w-4 h-4 text-white' />
                    </div>
                    <span className='text-slate-200'>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50'>
              <h2 className='text-3xl font-bold text-white mb-6'>Popular Activities</h2>
              <div className='flex flex-wrap gap-3'>
                {destination.activities.map((activity, idx) => (
                  <span key={idx} className='bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full'>
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Quick Info */}
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 sticky top-24'>
              <h3 className='text-xl font-bold text-white mb-4'>Trip Information</h3>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Calendar className='w-5 h-5 text-cyan-400' />
                  <div>
                    <p className='text-slate-400 text-sm'>Best Time</p>
                    <p className='text-white font-medium'>{destination.bestTime}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Clock className='w-5 h-5 text-cyan-400' />
                  <div>
                    <p className='text-slate-400 text-sm'>Recommended Duration</p>
                    <p className='text-white font-medium'>{destination.duration}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <DollarSign className='w-5 h-5 text-cyan-400' />
                  <div>
                    <p className='text-slate-400 text-sm'>Average Budget</p>
                    <p className='text-white font-medium'>{destination.budget}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Users className='w-5 h-5 text-cyan-400' />
                  <div>
                    <p className='text-slate-400 text-sm'>Weather</p>
                    <p className='text-white font-medium'>{destination.weather}</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onPlanTrip}
                className='w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg flex items-center justify-center gap-2'
              >
                <Plane className='w-5 h-5' />
                Plan Your Trip
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
