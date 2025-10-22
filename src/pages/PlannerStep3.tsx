import { useState } from 'react';
import { motion } from 'motion/react';
import { GlobalHeader } from '../components/GlobalHeader';
import { ProgressSidebar } from '../components/ProgressSidebar';
import { Users, Plus, Minus, Baby, User, UserCheck } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';

interface PlannerStep3Props {
  onNext: () => void;
  onBack: () => void;
}

const travelerTypes = [
  { id: 'adult', label: 'Adults', icon: User, description: '12+ years', color: 'cyan' },
  { id: 'child', label: 'Children', icon: UserCheck, description: '2-12 years', color: 'blue' },
  { id: 'infant', label: 'Infants', icon: Baby, description: 'Under 2 years', color: 'purple' },
];

const accommodationPreferences = [
  'Budget Hotel',
  '3-Star Hotel',
  '4-Star Hotel',
  '5-Star Hotel',
  'Boutique Hotel',
  'Resort',
  'Villa',
  'Hostel',
  'Apartment',
];

const dietaryPreferences = [
  'None',
  'Vegetarian',
  'Vegan',
  'Halal',
  'Kosher',
  'Gluten-Free',
  'Dairy-Free',
  'Pescatarian',
];

export function PlannerStep3({ onNext, onBack }: PlannerStep3Props) {
  const [travelers, setTravelers] = useState({
    adult: 2,
    child: 0,
    infant: 0,
  });
  const [selectedAccommodation, setSelectedAccommodation] = useState('4-Star Hotel');
  const [selectedDiet, setSelectedDiet] = useState('None');
  const [specialRequests, setSpecialRequests] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const updateTravelerCount = (type: 'adult' | 'child' | 'infant', delta: number) => {
    setTravelers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const totalTravelers = travelers.adult + travelers.child + travelers.infant;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <GlobalHeader />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-screen-2xl mx-auto flex gap-8">
          {/* Progress Sidebar */}
          <ProgressSidebar
            currentStep={3}
            steps={['Select Location', 'Select Dates', 'Add Details', 'Review & Book', 'Complete']}
          />

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl text-white mb-2">Add Trip Details</h1>
              <p className="text-slate-400 mb-8">
                Tell us more about your travel preferences and requirements
              </p>

              {/* Travelers Section */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-white">Number of Travelers</h3>
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-1.5">
                    Total: {totalTravelers}
                  </Badge>
                </div>

                <div className="space-y-6">
                  {travelerTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <div
                        key={type.id}
                        className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700/50"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-full bg-${type.color}-500/20 flex items-center justify-center`}
                          >
                            <Icon className={`w-6 h-6 text-${type.color}-400`} />
                          </div>
                          <div>
                            <p className="text-white">{type.label}</p>
                            <p className="text-slate-400">{type.description}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateTravelerCount(type.id as 'adult' | 'child' | 'infant', -1)
                            }
                            className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center text-white transition-colors"
                          >
                            <Minus className="w-5 h-5" />
                          </motion.button>
                          <span className="text-2xl text-white w-12 text-center">
                            {travelers[type.id as 'adult' | 'child' | 'infant']}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateTravelerCount(type.id as 'adult' | 'child' | 'infant', 1)
                            }
                            className="w-10 h-10 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 transition-colors"
                          >
                            <Plus className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Accommodation Preferences */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                <h3 className="text-white mb-4">Accommodation Preference</h3>
                <div className="grid grid-cols-3 gap-3">
                  {accommodationPreferences.map((pref) => (
                    <button
                      key={pref}
                      onClick={() => setSelectedAccommodation(pref)}
                      className={`px-4 py-3 rounded-xl transition-all ${
                        selectedAccommodation === pref
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                          : 'bg-slate-900/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary Preferences */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                <h3 className="text-white mb-4">Dietary Preferences</h3>
                <div className="flex flex-wrap gap-3">
                  {dietaryPreferences.map((diet) => (
                    <button
                      key={diet}
                      onClick={() => setSelectedDiet(diet)}
                      className={`px-5 py-2.5 rounded-full transition-all ${
                        selectedDiet === diet
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20'
                          : 'bg-slate-900/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
                      }`}
                    >
                      {diet}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                <h3 className="text-white mb-6">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Email Address</Label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                <h3 className="text-white mb-4">Special Requests or Requirements</h3>
                <Textarea
                  placeholder="Let us know if you have any special requests, accessibility needs, or specific preferences..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="min-h-32 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                />
                <p className="text-slate-400 mt-2">
                  We'll do our best to accommodate your needs
                </p>
              </div>

              {/* Summary Info */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Trip Summary</h4>
                    <p className="text-slate-300">
                      {totalTravelers} traveler{totalTravelers !== 1 ? 's' : ''} • {selectedAccommodation} • {selectedDiet} meals
                    </p>
                  </div>
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
                  Continue to Budget
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
