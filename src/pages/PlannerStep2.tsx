import { useState } from 'react';
import { motion } from 'motion/react';
import { GlobalHeader } from '../components/GlobalHeader';
import { ProgressSidebar } from '../components/ProgressSidebar';
import { Calendar as CalendarIcon, Star, DollarSign } from 'lucide-react';
import { events } from '../data/destinations';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui/badge';

const eventImages = [
  'https://images.unsplash.com/photo-1669954791643-bbe3824aaa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMHRlbXBsZSUyMGphcGFufGVufDF8fHx8MTc2MDgwNzA5NXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1669203408570-4140ee21f211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzYwNzk2NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1604394089666-6d365c060c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2MDc3Mjg3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1701343201582-2a13c7923ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzYwODA1NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
];

interface PlannerStep2Props {
  onNext: () => void;
  onBack: () => void;
}

export function PlannerStep2({ onNext, onBack }: PlannerStep2Props) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <GlobalHeader />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-screen-2xl mx-auto flex gap-8">
          {/* Progress Sidebar */}
          <ProgressSidebar
            currentStep={2}
            steps={['Select Location', 'Select Dates', 'Add Details', 'Review & Book', 'Complete']}
          />

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl text-white mb-2">Select Your Travel Dates</h1>
              <p className="text-slate-400 mb-8">
                Choose when you'd like to start your adventure
              </p>

              {/* Date Picker Bar */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Start Date */}
                  <div>
                    <label className="text-slate-300 mb-2 block">Start Date</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full pl-12 h-12 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* End Date */}
                  <div>
                    <label className="text-slate-300 mb-2 block">End Date</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full pl-12 h-12 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Selection */}
                <div className="mt-6">
                  <p className="text-slate-400 mb-3">Quick Select:</p>
                  <div className="flex gap-2 flex-wrap">
                    {['3 Days', '1 Week', '2 Weeks', '1 Month'].map((duration) => (
                      <button
                        key={duration}
                        className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-colors"
                      >
                        {duration}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="mb-8">
                <h3 className="text-white mb-4">Events During Your Trip</h3>
                <p className="text-slate-400 mb-6">
                  Special events and festivals happening at your destination
                </p>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 group cursor-pointer"
                    >
                      <div className="flex gap-4 p-6">
                        {/* Image */}
                        <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={eventImages[index]}
                            alt={event.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-white">{event.name}</h4>
                            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                              ${event.price}
                            </Badge>
                          </div>

                          <p className="text-slate-400 mb-2">{event.location}</p>
                          
                          <div className="flex items-center gap-4 text-slate-400">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{event.rating}</span>
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-4 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                          >
                            Add to Trip
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
                  Continue to Details
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
