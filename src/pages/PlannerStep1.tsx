import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, DollarSign, ChevronRight } from 'lucide-react';
import { GlobalHeader } from '../components/GlobalHeader';

interface PlannerStep1Props {
  onNext: () => void;
  isLoggedIn?: boolean;
  userName?: string;
  onBack?: () => void;
}

export function PlannerStep1({ onNext, isLoggedIn, userName, onBack }: PlannerStep1Props) {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [budget, setBudget] = useState('moderate');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination && startDate && endDate) {
      onNext();
    }
  };

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
        <div className='max-w-3xl mx-auto'>
          {/* Progress Bar */}
          <div className='mb-8'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-cyan-400 font-semibold'>Step 1 of 4</span>
              <span className='text-slate-400'>Trip Details</span>
            </div>
            <div className='h-2 bg-slate-800 rounded-full overflow-hidden'>
              <motion.div
                className='h-full bg-gradient-to-r from-cyan-500 to-blue-500'
                initial={{ width: 0 }}
                animate={{ width: '25%' }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-8'
          >
            <h1 className='text-4xl font-bold text-white mb-2'>Plan Your Dream Trip</h1>
            <p className='text-slate-400 text-lg'>Tell us where you want to go and when</p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 space-y-6'
          >
            {/* Destination */}
            <div>
              <label className='block text-white font-semibold mb-3 flex items-center gap-2'>
                <MapPin className='w-5 h-5 text-cyan-400' />
                Destination
              </label>
              <input
                type='text'
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder='Where do you want to go?'
                className='w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-cyan-500'
                required
              />
            </div>

            {/* Dates */}
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-white font-semibold mb-3 flex items-center gap-2'>
                  <Calendar className='w-5 h-5 text-cyan-400' />
                  Start Date
                </label>
                <input
                  type='date'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className='w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-cyan-500'
                  required
                />
              </div>
              <div>
                <label className='block text-white font-semibold mb-3 flex items-center gap-2'>
                  <Calendar className='w-5 h-5 text-cyan-400' />
                  End Date
                </label>
                <input
                  type='date'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className='w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-cyan-500'
                  required
                />
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label className='block text-white font-semibold mb-3 flex items-center gap-2'>
                <Users className='w-5 h-5 text-cyan-400' />
                Number of Travelers
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className='w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-cyan-500'
              >
                <option value='1'>1 Person</option>
                <option value='2'>2 People</option>
                <option value='3'>3 People</option>
                <option value='4'>4 People</option>
                <option value='5+'>5+ People</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className='block text-white font-semibold mb-3 flex items-center gap-2'>
                <DollarSign className='w-5 h-5 text-cyan-400' />
                Budget Range
              </label>
              <div className='grid grid-cols-3 gap-3'>
                {['budget', 'moderate', 'luxury'].map((option) => (
                  <button
                    key={option}
                    type='button'
                    onClick={() => setBudget(option)}
                    className={
                      'py-3 rounded-lg font-semibold capitalize transition-all ' +
                      (budget === option
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'bg-slate-900/50 text-slate-400 hover:bg-slate-700/50')
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg flex items-center justify-center gap-2'
            >
              Continue
              <ChevronRight className='w-5 h-5' />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
