import { useState } from 'react';
import { motion } from 'motion/react';
import { GlobalHeader } from '../components/GlobalHeader';
import { ProgressSidebar } from '../components/ProgressSidebar';
import { Plane, Hotel, UtensilsCrossed, MapPin } from 'lucide-react';
import { Slider } from '../components/ui/slider';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const budgetCategories = [
  { name: 'Transport', icon: Plane, color: 'cyan' },
  { name: 'Stay', icon: Hotel, color: 'blue' },
  { name: 'Food', icon: UtensilsCrossed, color: 'orange' },
  { name: 'Activity', icon: MapPin, color: 'green' },
];

const tripTypes = ['Budget', 'Standard', 'Luxury', 'Premium'];

const tripOptions = [
  {
    id: '1',
    name: 'Economy Flight + Budget Hotel',
    type: 'Budget',
    price: 499,
    image: 'https://images.unsplash.com/photo-1669954791643-bbe3824aaa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMHRlbXBsZSUyMGphcGFufGVufDF8fHx8MTc2MDgwNzA5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Best value for money',
  },
  {
    id: '2',
    name: 'Business Class + 4-Star Hotel',
    type: 'Standard',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1669203408570-4140ee21f211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzYwNzk2NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Comfort and convenience',
  },
  {
    id: '3',
    name: 'First Class + Luxury Resort',
    type: 'Luxury',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1604394089666-6d365c060c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2MDc3Mjg3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Premium experience',
  },
  {
    id: '4',
    name: 'Private Jet + Villa',
    type: 'Premium',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1701343201582-2a13c7923ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzYwODA1NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ultimate luxury',
  },
  {
    id: '5',
    name: 'Train Travel + Hostel',
    type: 'Budget',
    price: 299,
    image: 'https://images.unsplash.com/photo-1666891717987-7509e81db05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW5uYXIlMjB0ZWElMjBwbGFudGF0aW9ufGVufDF8fHx8MTc2MDgwNzA5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Backpacker special',
  },
  {
    id: '6',
    name: 'Premium Economy + Boutique Hotel',
    type: 'Standard',
    price: 899,
    image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNodSUyMHBpY2NodSUyMHBlcnV8ZW58MXx8fHwxNzYwNzExNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Good balance',
  },
];

interface PlannerStep4Props {
  onNext: () => void;
  onBack: () => void;
}

export function PlannerStep4({ onNext, onBack }: PlannerStep4Props) {
  const [priceRange, setPriceRange] = useState([500, 3000]);
  const [selectedType, setSelectedType] = useState('Budget');

  const filteredOptions = tripOptions.filter(
    (option) => option.price >= priceRange[0] && option.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <GlobalHeader />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-screen-2xl mx-auto flex gap-8">
          {/* Progress Sidebar */}
          <ProgressSidebar
            currentStep={4}
            steps={['Select Location', 'Select Dates', 'Add Details', 'Review & Book', 'Complete']}
          />

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl text-white mb-2">Customize Your Trip</h1>
              <p className="text-slate-400 mb-8">
                Set your budget and preferences for the perfect journey
              </p>

              {/* Budget Control */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                <h3 className="text-white mb-4">Your Budget Range</h3>
                <div className="mb-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-slate-300">Min: ${priceRange[0]}</span>
                    <span className="text-slate-300">Max: ${priceRange[1]}</span>
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={10000}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Budget Breakdown */}
                <div className="grid grid-cols-4 gap-4 mt-8">
                  {budgetCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div
                        key={category.name}
                        className="text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50"
                      >
                        <div
                          className={`w-12 h-12 mx-auto mb-2 rounded-full bg-${category.color}-500/20 flex items-center justify-center`}
                        >
                          <Icon className={`w-6 h-6 text-${category.color}-400`} />
                        </div>
                        <p className="text-slate-300">{category.name}</p>
                        <p className="text-slate-500 text-sm mt-1">Auto-allocated</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trip Type Filters */}
              <div className="mb-6">
                <h3 className="text-white mb-4">Trip Type</h3>
                <div className="flex gap-3">
                  {tripTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-8 py-3 rounded-full transition-all ${
                        selectedType === type
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                          : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trip Options Grid */}
              <div className="mb-8">
                <h3 className="text-white mb-4">Available Options</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredOptions.map((option, index) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 group cursor-pointer"
                    >
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <ImageWithFallback
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        
                        {/* Type Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white rounded-full">
                            {option.type}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h4 className="text-white mb-2">{option.name}</h4>
                        <p className="text-slate-400 mb-4">{option.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-2xl text-white">
                              ${option.price}
                            </p>
                            <p className="text-slate-500">per person</p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors"
                          >
                            Select
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onBack}
                  className="px-8 py-3 bg-slate-700/50 text-white rounded-xl hover:bg-slate-600/50 transition-all duration-200"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onNext}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-orange-500/20"
                >
                  Review & Checkout
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
