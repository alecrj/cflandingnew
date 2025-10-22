/// <reference path="./custom-elements.d.ts" />
import { Phone, X, Check, Star, ArrowRight, Clock, Users, TrendingUp, Shield, Zap, Calendar, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ModalType = 'demo' | 'pricing' | 'how' | 'stats' | 'calculator' | null;

function App() {
  const [receptionistSalary, setReceptionistSalary] = useState(45000);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Show sticky CTA after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitPopup) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showExitPopup]);

  return (
    <div className="h-screen bg-[#f7f5f2] relative overflow-hidden flex flex-col">
      {/* Nav */}
      <nav className="flex-shrink-0 z-50 bg-[#f7f5f2]">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span className="text-[18px] font-semibold">Nokturn</span>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-black/90 transition">
            Get started
          </button>
        </div>
      </nav>

      {/* Full-Screen Bento Grid */}
      <div className="flex-1 overflow-hidden p-5">
        <div className="h-full w-full max-w-[1400px] mx-auto">

          {/* Desktop Grid - Simple column-based grid */}
          <div className="hidden md:grid grid-cols-4 gap-5 h-full auto-rows-fr">

            {/* Try it live */}
            <div className="col-span-1 bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] rounded-[20px] p-10 relative overflow-hidden flex flex-col hover:-translate-y-1 transition-transform cursor-pointer">
              <h2 className="text-[28px] font-medium text-white leading-none tracking-tight mb-6">
                Try it live
              </h2>
              <div className="flex-1 flex items-center justify-center">
                {/* @ts-expect-error - Custom element */}
                <elevenlabs-convai agent-id="agent_0901k81qxj1bemvrzmc72xa33r7w"></elevenlabs-convai>
              </div>
            </div>

            {/* Stats - GIANT number */}
            <motion.button
              onClick={() => setActiveModal('stats')}
              className="col-span-1 bg-[#FF006B] rounded-[20px] p-10 relative overflow-hidden hover:-translate-y-1 transition-transform flex flex-col"
            >
              <h2 className="text-[28px] font-medium text-white leading-none tracking-tight">
                Proven results
              </h2>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-[128px] font-black text-white leading-none">100%</div>
              </div>
            </motion.button>

            {/* Demo Video - GIANT play button */}
            <div className="col-span-1 bg-gradient-to-br from-black to-gray-800 rounded-[20px] p-10 relative overflow-hidden flex flex-col hover:-translate-y-1 transition-transform cursor-pointer group">
              <h2 className="text-[28px] font-medium text-white leading-none tracking-tight">
                Watch demo
              </h2>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <div className="w-0 h-0 border-l-[32px] border-l-black border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>

            {/* How it works - GIANT numbers */}
            <motion.button
              onClick={() => setActiveModal('how')}
              className="col-span-1 bg-[#0061FF] rounded-[20px] p-10 relative overflow-hidden hover:-translate-y-1 transition-transform flex flex-col"
            >
              <h2 className="text-[28px] font-medium text-white leading-none tracking-tight">
                5 minute setup
              </h2>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[56px] font-black text-[#0061FF]">1</span>
                  </div>
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[56px] font-black text-[#0061FF]">2</span>
                  </div>
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[56px] font-black text-[#0061FF]">3</span>
                  </div>
                </div>
              </div>
            </motion.button>

            {/* Pricing - GIANT price */}
            <motion.button
              onClick={() => setActiveModal('pricing')}
              className="col-span-1 bg-[#7C3AED] rounded-[20px] p-10 relative overflow-hidden hover:-translate-y-1 transition-transform flex flex-col"
            >
              <h2 className="text-[28px] font-medium text-white leading-none tracking-tight">
                Pricing
              </h2>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-[140px] font-black text-white leading-none">$297</div>
              </div>
            </motion.button>

            {/* Calculator - GIANT numbers */}
            <motion.button
              onClick={() => setActiveModal('calculator')}
              className="col-span-1 bg-[#FFD60A] rounded-[20px] p-10 relative overflow-hidden hover:-translate-y-1 transition-transform flex flex-col"
            >
              <h2 className="text-[28px] font-medium text-black leading-none tracking-tight">
                ROI
              </h2>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-[96px] font-black text-black leading-none">$58K</div>
                <ArrowRight className="w-16 h-16 text-black/40 my-4" strokeWidth={3} />
                <div className="text-[96px] font-black text-green-700 leading-none">$7K</div>
              </div>
            </motion.button>

          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-2 gap-2 h-full grid-rows-4 p-2">

            {/* Try it live - Full width on mobile */}
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] rounded-[20px] p-5 relative overflow-hidden flex flex-col">
              <h2 className="text-[20px] font-bold text-white leading-none tracking-tight mb-4">
                Try it live
              </h2>
              <div className="flex-1 flex items-center justify-center">
                {/* @ts-expect-error - Custom element */}
                <elevenlabs-convai agent-id="agent_0901k81qxj1bemvrzmc72xa33r7w"></elevenlabs-convai>
              </div>
            </div>

            {/* How it works - Large numbers */}
            <motion.button
              onClick={() => setActiveModal('how')}
              className="bg-gradient-to-br from-[#0061FF] to-[#0047CC] rounded-[20px] p-4 hover:scale-[1.02] transition-transform flex flex-col items-center justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-2 mb-2">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[28px] font-black text-[#0061FF]">1</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[28px] font-black text-[#0061FF]">2</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[28px] font-black text-[#0061FF]">3</span>
                </div>
              </div>
              <div className="text-white/80 text-[9px] font-bold tracking-wider">5 MIN SETUP</div>
            </motion.button>

            {/* Stats - HUGE number */}
            <motion.button
              onClick={() => setActiveModal('stats')}
              className="bg-gradient-to-br from-[#FF006B] to-[#FF1A7A] rounded-[20px] p-4 hover:scale-[1.02] transition-transform flex flex-col items-center justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-[60px] font-black text-white leading-none mb-1">100%</div>
              <div className="text-[9px] text-white/70 font-bold tracking-wider">ANSWERED</div>
            </motion.button>

            {/* Calculator - Visual numbers */}
            <motion.button
              onClick={() => setActiveModal('calculator')}
              className="bg-gradient-to-br from-[#FFD60A] to-[#FFC700] rounded-[20px] p-4 hover:scale-[1.02] transition-transform flex flex-col items-center justify-center relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-black/50 text-[9px] font-bold mb-0.5">BEFORE</div>
              <div className="text-[32px] font-black text-black leading-none mb-1">$58K</div>
              <ArrowRight className="w-6 h-6 text-black/30 mb-1" strokeWidth={3} />
              <div className="text-green-700/70 text-[9px] font-bold mb-0.5">AFTER</div>
              <div className="text-[32px] font-black text-green-700 leading-none">$7K</div>
              <div className="absolute top-2 right-2 bg-green-600 text-white rounded-full px-1.5 py-0.5 text-[8px] font-bold">
                8x
              </div>
            </motion.button>

            {/* Pricing - Large price */}
            <motion.button
              onClick={() => setActiveModal('pricing')}
              className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-[20px] p-4 hover:scale-[1.02] transition-transform flex flex-col items-center justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-white/60 text-[9px] font-bold mb-0.5 tracking-wider">FROM</div>
              <div className="text-[52px] font-black text-white leading-none mb-0.5">$297</div>
              <div className="text-white/70 text-[10px] font-medium">/month</div>
            </motion.button>

          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen px-8 py-24">
            <div className="max-w-4xl mx-auto">

              <button
                onClick={() => setActiveModal(null)}
                className="fixed top-8 right-8 w-12 h-12 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition"
              >
                <X className="w-6 h-6" />
              </button>

              {activeModal === 'demo' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-12">
                    <h1 className="text-[64px] font-bold mb-6 leading-none">Try our AI receptionist</h1>
                    <p className="text-[20px] text-gray-600 max-w-2xl mx-auto">
                      Call now and experience how Nokturn handles your customers. It knows your services, pricing, and can book appointments instantly.
                    </p>
                  </div>

                  <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C61]/5 rounded-[32px] p-12 mb-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-pulse"></div>
                        <span className="text-gray-600 font-medium">Live Demo - Try it now</span>
                      </div>
                      <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                        Available 24/7
                      </div>
                    </div>

                    <div className="flex items-center justify-center py-12 mb-8">
                      {/* @ts-expect-error - Custom element */}
                      <elevenlabs-convai agent-id="agent_0901k81qxj1bemvrzmc72xa33r7w"></elevenlabs-convai>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-black/10">
                      <div className="text-center">
                        <Clock className="w-6 h-6 mx-auto mb-2 text-[#FF6B35]" />
                        <div className="text-sm text-gray-600">Responds in</div>
                        <div className="font-bold">&lt;2 seconds</div>
                      </div>
                      <div className="text-center">
                        <Calendar className="w-6 h-6 mx-auto mb-2 text-[#FF6B35]" />
                        <div className="text-sm text-gray-600">Books</div>
                        <div className="font-bold">Appointments</div>
                      </div>
                      <div className="text-center">
                        <MessageSquare className="w-6 h-6 mx-auto mb-2 text-[#FF6B35]" />
                        <div className="text-sm text-gray-600">Captures</div>
                        <div className="font-bold">Every detail</div>
                      </div>
                    </div>
                  </div>

                  {/* Social Proof */}
                  <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white border border-gray-200 rounded-[24px] p-6">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">"We were losing 5-10 calls per week to voicemail. Now we capture every single one. ROI paid for itself in the first month."</p>
                      <div className="font-medium">Mike Johnson</div>
                      <div className="text-sm text-gray-500">Johnson HVAC, Phoenix</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-[24px] p-6">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">"Customers can't tell it's AI. Books appointments perfectly and handles emergency calls at 2 AM. Game changer."</p>
                      <div className="font-medium">Sarah Martinez</div>
                      <div className="text-sm text-gray-500">Cool Breeze AC, Miami</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center max-w-2xl mx-auto">
                    <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-black/90 transition inline-flex items-center gap-2 mb-4">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-sm text-gray-500">5-minute setup • No credit card required • Cancel anytime</p>
                  </div>
                </motion.div>
              )}

              {activeModal === 'pricing' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-12">
                    <h1 className="text-[64px] font-bold mb-6 leading-none">Simple pricing, serious value</h1>
                    <p className="text-[20px] text-gray-600 max-w-2xl mx-auto">
                      Replace a $45,000/year receptionist who works 24% of the week. Pay 10x less, get 4x more coverage.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <motion.div
                      className="bg-white border border-gray-200 rounded-[28px] p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-[24px] font-bold mb-2">Starter</h3>
                      <div className="text-gray-600 mb-4">Perfect for solo operators</div>
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-[48px] font-bold">$297</span>
                        <span className="text-gray-500">/month</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>750 minutes/month (~7-8 calls/day)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>24/7 AI receptionist</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Appointment booking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Lead capture & routing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>SMS notifications</span>
                        </li>
                      </ul>
                      <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-black/90 transition">
                        Get Started
                      </button>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-[#7C3AED]/10 to-[#6D28D9]/5 border-2 border-[#7C3AED] rounded-[28px] p-8 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white px-4 py-1 rounded-full text-[14px] font-medium">
                        Most Popular
                      </div>
                      <h3 className="text-[24px] font-bold mb-2 mt-2">Professional</h3>
                      <div className="text-gray-600 mb-4">For growing businesses</div>
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-[48px] font-bold">$597</span>
                        <span className="text-gray-500">/month</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                          <span>2,000 minutes/month (~20 calls/day)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                          <span><strong>Everything in Starter</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                          <span>Call recordings & transcripts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                          <span>Analytics dashboard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                          <span>CRM integrations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                          <span>Priority support</span>
                        </li>
                      </ul>
                      <button className="w-full bg-[#7C3AED] text-white py-4 rounded-full font-medium hover:bg-[#6D28D9] transition">
                        Get Started
                      </button>
                    </motion.div>

                    <motion.div
                      className="bg-white border border-gray-200 rounded-[28px] p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-[24px] font-bold mb-2">Premium</h3>
                      <div className="text-gray-600 mb-4">Multi-location enterprises</div>
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-[48px] font-bold">$1,497</span>
                        <span className="text-gray-500">/month</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>6,000 minutes/month (~60 calls/day)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span><strong>Everything in Pro</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Multi-location support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Custom voice training</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Dedicated account manager</span>
                        </li>
                      </ul>
                      <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-black/90 transition">
                        Contact Sales
                      </button>
                    </motion.div>
                  </div>

                  {/* Value Comparison */}
                  <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50 rounded-[32px] p-10 mb-12">
                    <h3 className="text-[28px] font-bold mb-6 text-center">vs. Traditional Receptionist</h3>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Receptionist (40hrs/week)</div>
                        <div className="text-[32px] font-bold mb-4">$58,500<span className="text-lg text-gray-500">/year</span></div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div>• Only works 24% of the week</div>
                          <div>• Sick days, vacations, breaks</div>
                          <div>• Misses night/weekend calls</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Nokturn Professional</div>
                        <div className="text-[32px] font-bold text-green-600 mb-4">$7,164<span className="text-lg text-gray-500">/year</span></div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span>Works 24/7/365 (100%)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span>Never sick, never on vacation</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span>Answers every single call</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-green-200 text-center">
                      <div className="text-sm text-gray-600 mb-2">You save</div>
                      <div className="text-[48px] font-bold text-green-600">$51,336/year</div>
                      <div className="text-gray-600">8.2x ROI with 4x more coverage</div>
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-[24px] font-bold mb-6">Common questions</h3>
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-[20px] p-6">
                        <div className="font-semibold mb-2">Can I change plans anytime?</div>
                        <div className="text-gray-600">Yes! Upgrade or downgrade anytime. No contracts, no commitments.</div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-[20px] p-6">
                        <div className="font-semibold mb-2">What happens if I go over my minutes?</div>
                        <div className="text-gray-600">We'll notify you at 80% usage. Overage is $0.40/minute or upgrade to the next tier.</div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-[20px] p-6">
                        <div className="font-semibold mb-2">How quickly can I get started?</div>
                        <div className="text-gray-600">Setup takes just 5 minutes. No credit card required to begin. Full onboarding support included.</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeModal === 'calculator' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-12">
                    <h1 className="text-[64px] font-bold mb-6 leading-none">See your savings</h1>
                    <p className="text-[20px] text-gray-600 max-w-2xl mx-auto">
                      Calculate exactly how much you'll save switching from a traditional receptionist to Nokturn.
                    </p>
                  </div>

                  <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#FFD60A]/10 to-[#FFC700]/5 rounded-[32px] p-12 mb-12">
                    <div className="mb-12">
                      <div className="flex justify-between items-baseline mb-4">
                        <span className="text-gray-700 font-medium">Annual receptionist salary</span>
                        <motion.span
                          className="text-[40px] font-bold"
                          key={receptionistSalary}
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          ${receptionistSalary.toLocaleString()}
                        </motion.span>
                      </div>
                      <input
                        type="range"
                        min="30000"
                        max="70000"
                        step="5000"
                        value={receptionistSalary}
                        onChange={(e) => setReceptionistSalary(Number(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #FFD60A 0%, #FFD60A ${((receptionistSalary - 30000) / 40000) * 100}%, #e5e5e5 ${((receptionistSalary - 30000) / 40000) * 100}%, #e5e5e5 100%)`
                        }}
                      />
                      <div className="flex justify-between text-gray-500 text-sm mt-3">
                        <span>$30,000</span>
                        <span>$70,000</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <motion.div
                        className="bg-red-50 border border-red-200 rounded-[24px] p-8"
                        key={`traditional-${receptionistSalary}`}
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-5 h-5 text-red-600" />
                          <div className="text-sm text-gray-600">Traditional Receptionist</div>
                        </div>
                        <div className="text-[36px] font-bold text-red-600 mb-2">${(receptionistSalary * 1.3).toLocaleString()}</div>
                        <div className="text-sm text-gray-600 mb-4">per year (with benefits)</div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div>• Works 40 hrs/week (24%)</div>
                          <div>• Sick days & vacation</div>
                          <div>• Misses 76% of the week</div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-green-50 border-2 border-green-500 rounded-[24px] p-8"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Zap className="w-5 h-5 text-green-600" />
                          <div className="text-sm text-gray-600">Nokturn AI</div>
                        </div>
                        <div className="text-[36px] font-bold text-green-600 mb-2">$7,164</div>
                        <div className="text-sm text-gray-600 mb-4">per year (Professional)</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span>Works 24/7/365 (100%)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span>Never takes a break</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span>Answers every call</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="text-center bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-500 rounded-[24px] p-10"
                      key={`savings-${receptionistSalary}`}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
                      <div className="text-sm text-gray-600 mb-3">Annual Savings</div>
                      <div className="text-[56px] font-bold leading-none text-green-600 mb-4">
                        ${((receptionistSalary * 1.3) - 7164).toLocaleString()}
                      </div>
                      <div className="text-lg text-gray-700 font-medium">
                        {(((receptionistSalary * 1.3) - 7164) / 7164).toFixed(1)}x ROI with 4x more coverage
                      </div>
                    </motion.div>
                  </div>

                  {/* What you get */}
                  <div className="max-w-3xl mx-auto mb-12">
                    <h3 className="text-[24px] font-bold mb-6 text-center">What you get for $597/month</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: Phone, text: "2,000 minutes (~20 calls/day)" },
                        { icon: Clock, text: "Answers in under 2 seconds" },
                        { icon: Calendar, text: "Books appointments 24/7" },
                        { icon: MessageSquare, text: "Captures every lead detail" },
                        { icon: Shield, text: "Never misses a call" },
                        { icon: Users, text: "Handles multiple calls simultaneously" }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 bg-white border border-gray-200 rounded-[16px] p-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (i * 0.05) }}
                        >
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="font-medium">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center max-w-2xl mx-auto">
                    <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-black/90 transition inline-flex items-center gap-2 mb-4">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-sm text-gray-500">See the savings for yourself. No credit card required.</p>
                  </div>
                </motion.div>
              )}

              {activeModal === 'how' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h1 className="text-[64px] font-bold mb-6 leading-none">Setup in 5 minutes</h1>
                    <p className="text-[20px] text-gray-600 max-w-2xl mx-auto">
                      No complex installation. No technical skills. Just three simple steps and you're capturing every lead.
                    </p>
                  </div>

                  <div className="space-y-8 max-w-3xl mx-auto mb-16">
                    <motion.div
                      className="flex gap-6 bg-gradient-to-br from-[#0061FF]/5 to-[#0047CC]/5 rounded-[32px] p-8 border border-[#0061FF]/20"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0061FF] to-[#0047CC] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-[32px] font-bold text-white">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[28px] font-bold mb-3">Forward your calls</h3>
                        <p className="text-[18px] text-gray-600 mb-6">
                          Keep your existing phone number. Just dial this code to forward calls to your Nokturn AI receptionist.
                        </p>
                        <div className="bg-white rounded-[20px] p-6 border border-[#0061FF]/20">
                          <div className="text-sm text-gray-600 mb-2">On your business phone, dial:</div>
                          <code className="text-[24px] font-mono font-bold">*72 + Your Nokturn Number</code>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex gap-6 bg-gradient-to-br from-[#FF006B]/5 to-[#CC0055]/5 rounded-[32px] p-8 border border-[#FF006B]/20"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF006B] to-[#CC0055] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-[32px] font-bold text-white">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[28px] font-bold mb-3">Train your AI</h3>
                        <p className="text-[18px] text-gray-600 mb-6">
                          Fill out a quick 2-minute form with your business details. Our AI learns your:
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {["Services & pricing", "Business hours", "Booking calendar", "Service area"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white rounded-[12px] px-4 py-3">
                              <Check className="w-5 h-5 text-[#FF006B]" />
                              <span className="font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex gap-6 bg-gradient-to-br from-[#00E676]/10 to-[#00C853]/10 rounded-[32px] p-8 border-2 border-[#00E676]/40"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00E676] to-[#00C853] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Check className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[28px] font-bold mb-3">Start capturing every lead</h3>
                        <p className="text-[18px] text-gray-600 mb-6">
                          That's it! Your AI receptionist is live. Every call gets answered in under 2 seconds, appointments get booked, and you get instant notifications.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <div className="bg-white rounded-[12px] px-5 py-3 font-medium flex items-center gap-2">
                            <Zap className="w-5 h-5 text-green-600" />
                            Instant setup
                          </div>
                          <div className="bg-white rounded-[12px] px-5 py-3 font-medium flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600" />
                            No coding needed
                          </div>
                          <div className="bg-white rounded-[12px] px-5 py-3 font-medium flex items-center gap-2">
                            <Users className="w-5 h-5 text-green-600" />
                            Works immediately
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <div className="text-center max-w-2xl mx-auto">
                    <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-black/90 transition inline-flex items-center gap-2 mb-4">
                      Get Started in 5 Minutes
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-sm text-gray-500">Quick setup • No credit card • Cancel anytime</p>
                  </div>
                </motion.div>
              )}

              {activeModal === 'stats' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h1 className="text-[64px] font-bold mb-6 leading-none">Proven performance</h1>
                    <p className="text-[20px] text-gray-600 max-w-2xl mx-auto">
                      Real metrics from HVAC companies using Nokturn. These aren't projections—this is what actually happens.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                      className="bg-gradient-to-br from-[#FF006B]/10 to-[#CC0055]/5 border-2 border-[#FF006B]/20 rounded-[32px] p-10 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#FF006B]/20 flex items-center justify-center mx-auto mb-6">
                        <Phone className="w-8 h-8 text-[#FF006B]" />
                      </div>
                      <div className="text-[72px] font-bold mb-4 bg-gradient-to-br from-[#FF006B] to-[#CC0055] bg-clip-text text-transparent">100%</div>
                      <div className="text-[24px] font-bold mb-3">Call Answer Rate</div>
                      <div className="text-gray-600">
                        Every single call gets answered. Zero missed opportunities, zero voicemails.
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-[#0061FF]/10 to-[#0047CC]/5 border-2 border-[#0061FF]/20 rounded-[32px] p-10 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#0061FF]/20 flex items-center justify-center mx-auto mb-6">
                        <Clock className="w-8 h-8 text-[#0061FF]" />
                      </div>
                      <div className="text-[72px] font-bold mb-4 bg-gradient-to-br from-[#0061FF] to-[#0047CC] bg-clip-text text-transparent">&lt;2s</div>
                      <div className="text-[24px] font-bold mb-3">Average Response</div>
                      <div className="text-gray-600">
                        Answers in under 2 seconds. Faster than any human could pick up the phone.
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-[#00E676]/10 to-[#00C853]/5 border-2 border-[#00E676]/20 rounded-[32px] p-10 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#00E676]/20 flex items-center justify-center mx-auto mb-6">
                        <Zap className="w-8 h-8 text-[#00E676]" />
                      </div>
                      <div className="text-[72px] font-bold mb-4 bg-gradient-to-br from-[#00E676] to-[#00C853] bg-clip-text text-transparent">24/7</div>
                      <div className="text-[24px] font-bold mb-3">Always Available</div>
                      <div className="text-gray-600">
                        No breaks. No sick days. No vacation. Works every hour of every day.
                      </div>
                    </motion.div>
                  </div>

                  {/* Additional Stats */}
                  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
                    <motion.div
                      className="bg-white border border-gray-200 rounded-[24px] p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-[36px] font-bold">43%</div>
                          <div className="text-sm text-gray-600">Average revenue increase</div>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        HVAC companies see an average 43% increase in booked jobs within the first 3 months.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white border border-gray-200 rounded-[24px] p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <div className="text-[36px] font-bold">87%</div>
                          <div className="text-sm text-gray-600">Auto-booking success</div>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        87% of calls result in a booked appointment without human intervention.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white border border-gray-200 rounded-[24px] p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-[36px] font-bold">95%</div>
                          <div className="text-sm text-gray-600">Customer satisfaction</div>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        Customers rate their experience 4.8/5 on average. Most can't tell they're talking to AI.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white border border-gray-200 rounded-[24px] p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <div className="text-[36px] font-bold">$51K</div>
                          <div className="text-sm text-gray-600">Average annual savings</div>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        Companies save an average of $51,336/year vs hiring a traditional receptionist.
                      </p>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <div className="text-center max-w-2xl mx-auto">
                    <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-black/90 transition inline-flex items-center gap-2 mb-4">
                      Get Started Today
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-sm text-gray-500">Quick setup • Full access • No commitment</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
