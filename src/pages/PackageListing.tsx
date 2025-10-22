import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Star, Clock } from 'lucide-react';
import { GlobalHeader } from '../components/GlobalHeader';

const packageImages = [
  'https://images.unsplash.com/photo-1669954791643-bbe3824aaa5f?w=400',
  'https://images.unsplash.com/photo-1669203408570-4140ee21f211?w=400',
  'https://images.unsplash.com/photo-1604394089666-6d365c060c6c?w=400',
  'https://images.unsplash.com/photo-1701343201582-2a13c7923ce7?w=400',
  'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400',
  'https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?w=400',
];

const tourPackages = [
  { id: 1, name: 'Japan Cultural Tour', duration: '7 Days', rating: 4.8, price: 1299, emiPrice: 108.25, highlights: ['Temples', 'Food Tours'] },
  { id: 2, name: 'Greek Island Hopping', duration: '10 Days', rating: 4.9, price: 1899, emiPrice: 158.25, highlights: ['Beaches', 'History'] },
  { id: 3, name: 'Bali Paradise', duration: '5 Days', rating: 4.7, price: 899, emiPrice: 74.92, highlights: ['Beaches', 'Culture'] },
  { id: 4, name: 'Swiss Alps Adventure', duration: '8 Days', rating: 4.9, price: 2199, emiPrice: 183.25, highlights: ['Mountains', 'Skiing'] },
  { id: 5, name: 'Machu Picchu Trek', duration: '6 Days', rating: 4.8, price: 1599, emiPrice: 133.25, highlights: ['Hiking', 'History'] },
  { id: 6, name: 'New Zealand Explorer', duration: '12 Days', rating: 4.9, price: 2899, emiPrice: 241.58, highlights: ['Nature', 'Adventure'] },
];

const categories = ['All Packages', 'Adventure', 'Beach', 'Cultural', 'Luxury', 'Budget'];

interface PackageListingProps {
  isLoggedIn?: boolean;
  userName?: string;
  onBack?: () => void;
}

export function PackageListing({ isLoggedIn, userName, onBack }: PackageListingProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Packages');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800'>
      {/* Header */}
      <GlobalHeader 
        isLoggedIn={isLoggedIn} 
        userName={userName} 
        onBack={onBack}
        showBackButton={true}
      />

      <div className='pt-12 pb-16 px-6'>
        <div className='max-w-screen-2xl mx-auto'>
          {/* Page Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='mb-8'>
            <h1 className='text-5xl font-bold text-white mb-2'>Tour Packages</h1>
            <p className='text-slate-400 text-lg'>Discover our curated selection of travel packages</p>
          </motion.div>

          {/* Search & Filters */}
          <div className='mb-8 space-y-4'>
            <div className='flex gap-4'>
              <div className='relative flex-1'>
                <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400' />
                <input
                  placeholder='Search destinations, activities...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pl-12 h-12 w-full bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 rounded-lg px-4 outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <button className='px-6 h-12 bg-slate-800/50 border border-slate-700 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2'>
                <SlidersHorizontal className='w-5 h-5' />
                Filters
              </button>
            </div>

            {/* Category Pills */}
            <div className='flex gap-2 overflow-x-auto pb-2'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={'px-4 py-2 rounded-full whitespace-nowrap transition-all ' + (selectedCategory === category ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50')}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Package Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {tourPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className='bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 group cursor-pointer'
              >
                {/* Image */}
                <div className='relative h-56 overflow-hidden'>
                  <img
                    src={packageImages[index]}
                    alt={pkg.name}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400';
                    }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent'></div>
                  
                  {/* Rating Badge */}
                  <div className='absolute top-4 right-4'>
                    <div className='bg-slate-900/80 backdrop-blur-sm text-white border border-slate-700 px-3 py-1 rounded-full flex items-center gap-1'>
                      <Star className='w-3 h-3 fill-yellow-400 text-yellow-400' />
                      {pkg.rating}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className='absolute bottom-4 left-4'>
                    <div className='bg-cyan-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1.5'>
                      <Clock className='w-3.5 h-3.5' />
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-white mb-3'>{pkg.name}</h3>

                  {/* Highlights */}
                  <div className='mb-4'>
                    <p className='text-slate-400 text-sm mb-2'>Highlights:</p>
                    <div className='flex flex-wrap gap-2'>
                      {pkg.highlights.map((highlight, idx) => (
                        <span key={idx} className='border border-slate-600 text-slate-300 px-2 py-1 rounded text-sm'>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className='mb-4 pb-4 border-b border-slate-700'>
                    <div className='flex items-baseline gap-2'>
                      <span className='text-3xl font-bold text-white'>
                        ${pkg.price}
                      </span>
                      <span className='text-slate-400'>/Person</span>
                    </div>
                    <p className='text-slate-400 text-sm mt-1'>
                      or ${pkg.emiPrice}/month EMI available
                    </p>
                  </div>

                  {/* Pay Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg font-semibold'
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
