import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlobalHeader } from '../components/GlobalHeader';
import { SummarySidebar } from '../components/SummarySidebar';
import { Check, CreditCard, Building2, Smartphone } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

interface SummaryCheckoutProps {
  onBack: () => void;
}

export function SummaryCheckout({ onBack }: SummaryCheckoutProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'upi'>('card');

  const tripSummary = [
    { label: 'Destination', value: 'Kyoto, Japan' },
    { label: 'Duration', value: '7 Days / 6 Nights' },
    { label: 'Travelers', value: '2 Adults' },
    { label: 'Dates', value: 'Mar 15 - Mar 22, 2025' },
  ];

  const handleCheckout = () => {
    // Simulate payment processing
    setTimeout(() => {
      setIsConfirmed(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <GlobalHeader />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isConfirmed ? (
              <motion.div
                key="checkout"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-8"
              >
                {/* Main Content */}
                <div className="flex-1">
                  <h1 className="text-4xl text-white mb-2">Review & Payment</h1>
                  <p className="text-slate-400 mb-8">
                    Review your trip details and complete your booking
                  </p>

                  {/* Trip Summary Card */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                    <h3 className="text-white mb-6">Trip Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {tripSummary.map((item, index) => (
                        <div key={index}>
                          <p className="text-slate-400 mb-1">{item.label}</p>
                          <p className="text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                    <h3 className="text-white mb-6">Payment Method</h3>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <button
                        onClick={() => setPaymentMethod('card')}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          paymentMethod === 'card'
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <CreditCard className={`w-8 h-8 mx-auto mb-2 ${
                          paymentMethod === 'card' ? 'text-cyan-400' : 'text-slate-400'
                        }`} />
                        <p className={paymentMethod === 'card' ? 'text-cyan-400' : 'text-slate-300'}>
                          Credit/Debit Card
                        </p>
                      </button>

                      <button
                        onClick={() => setPaymentMethod('bank')}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          paymentMethod === 'bank'
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <Building2 className={`w-8 h-8 mx-auto mb-2 ${
                          paymentMethod === 'bank' ? 'text-cyan-400' : 'text-slate-400'
                        }`} />
                        <p className={paymentMethod === 'bank' ? 'text-cyan-400' : 'text-slate-300'}>
                          Net Banking
                        </p>
                      </button>

                      <button
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          paymentMethod === 'upi'
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <Smartphone className={`w-8 h-8 mx-auto mb-2 ${
                          paymentMethod === 'upi' ? 'text-cyan-400' : 'text-slate-400'
                        }`} />
                        <p className={paymentMethod === 'upi' ? 'text-cyan-400' : 'text-slate-300'}>
                          UPI
                        </p>
                      </button>
                    </div>

                    {/* Card Details Form */}
                    {paymentMethod === 'card' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-4"
                      >
                        <div>
                          <Label className="text-slate-300">Card Number</Label>
                          <Input
                            placeholder="1234 5678 9012 3456"
                            className="mt-1 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-slate-300">Expiry Date</Label>
                            <Input
                              placeholder="MM/YY"
                              className="mt-1 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                            />
                          </div>
                          <div>
                            <Label className="text-slate-300">CVV</Label>
                            <Input
                              placeholder="123"
                              type="password"
                              maxLength={3}
                              className="mt-1 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                            />
                          </div>
                        </div>
                        <div>
                          <Label className="text-slate-300">Cardholder Name</Label>
                          <Input
                            placeholder="John Doe"
                            className="mt-1 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                      </motion.div>
                    )}

                    {paymentMethod === 'bank' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-center py-8"
                      >
                        <p className="text-slate-400">
                          You will be redirected to your bank's secure payment gateway
                        </p>
                      </motion.div>
                    )}

                    {paymentMethod === 'upi' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-4"
                      >
                        <div>
                          <Label className="text-slate-300">UPI ID</Label>
                          <Input
                            placeholder="yourname@upi"
                            className="mt-1 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-start gap-3 mb-8">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 rounded border-slate-700"
                    />
                    <label htmlFor="terms" className="text-slate-300">
                      I agree to the{' '}
                      <a href="#" className="text-cyan-400 hover:text-cyan-300">
                        Terms & Conditions
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-cyan-400 hover:text-cyan-300">
                        Privacy Policy
                      </a>
                    </label>
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
                  </div>
                </div>

                {/* Summary Sidebar */}
                <SummarySidebar
                  items={tripSummary}
                  subtotal={1299}
                  discount={50}
                  total={1249}
                  onCheckout={handleCheckout}
                />
              </motion.div>
            ) : (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center py-16"
              >
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center"
                >
                  <Check className="w-12 h-12 text-white" />
                </motion.div>

                {/* Success Message */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl text-white mb-4"
                >
                  Booking Confirmed!
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-slate-300 mb-8 text-lg"
                >
                  Your trip to Kyoto, Japan has been successfully booked.
                  <br />
                  Confirmation details have been sent to your email.
                </motion.p>

                {/* Booking Reference */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8"
                >
                  <p className="text-slate-400 mb-2">Booking Reference</p>
                  <p className="text-3xl text-cyan-400 tracking-wider">BRT-2025-KYT-7849</p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex gap-4 justify-center"
                >
                  <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-cyan-500/20">
                    View Itinerary
                  </button>
                  <button className="px-8 py-3 bg-slate-700/50 text-white rounded-xl hover:bg-slate-600/50 transition-all duration-200">
                    Download Receipt
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
