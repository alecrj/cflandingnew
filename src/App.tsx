/// <reference path="./custom-elements.d.ts" />
import { Phone, X } from 'lucide-react';
import { useState } from 'react';

type ModalType = 'demo' | 'pricing' | 'how' | 'stats' | 'calculator' | null;

function App() {
  const [receptionistSalary, setReceptionistSalary] = useState(45000);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f5f2]/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-[22px] font-semibold">Nokturn</span>
          </div>
          <button className="bg-black text-white px-7 py-3 rounded-full text-[15px] font-medium hover:bg-black/90 transition">
            Get started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-16 px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-[72px] font-bold leading-[0.95] mb-6 tracking-tight">
            Never miss<br />a call again
          </h1>
          <p className="text-[20px] text-gray-600 max-w-[600px] mx-auto">
            AI receptionist that answers instantly, books appointments, and captures every lead
          </p>
        </div>
      </div>

      {/* Bento - Everything visible on one screen */}
      <div className="px-8 pb-20">
        <div className="max-w-[1400px] mx-auto">

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-4 h-[520px]">

            {/* Try it live - Large orange */}
            <button
              onClick={() => setActiveModal('demo')}
              className="row-span-2 bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] rounded-[32px] p-12 relative overflow-hidden group hover:scale-[1.01] transition-transform"
            >
              <h2 className="text-[48px] font-bold text-white leading-none text-left">
                Try it<br />live
              </h2>

              {/* Decorative elements */}
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 right-8">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="50" fill="white" fillOpacity="0.15"/>
                  <circle cx="60" cy="60" r="30" fill="white" fillOpacity="0.2"/>
                </svg>
              </div>
            </button>

            {/* How it works - Blue */}
            <button
              onClick={() => setActiveModal('how')}
              className="bg-gradient-to-br from-[#0061FF] to-[#0047CC] rounded-[32px] p-10 relative overflow-hidden group hover:scale-[1.01] transition-transform"
            >
              <h2 className="text-[36px] font-bold text-white leading-none text-left">
                How it<br />works
              </h2>

              <div className="absolute bottom-8 right-8 flex gap-3">
                <div className="w-14 h-14 rounded-full bg-white/20"></div>
                <div className="w-14 h-14 rounded-full bg-white/15"></div>
              </div>
            </button>

            {/* Cost calculator - Yellow */}
            <button
              onClick={() => setActiveModal('calculator')}
              className="bg-gradient-to-br from-[#FFD60A] to-[#FFC700] rounded-[32px] p-10 relative overflow-hidden group hover:scale-[1.01] transition-transform"
            >
              <h2 className="text-[36px] font-bold text-black leading-none text-left">
                Cost<br />calculator
              </h2>

              <div className="absolute bottom-6 right-6">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <text x="10" y="65" fontSize="64" fontWeight="900" fill="black" fillOpacity="0.15">$</text>
                </svg>
              </div>
            </button>

            {/* Stats - Pink */}
            <button
              onClick={() => setActiveModal('stats')}
              className="bg-gradient-to-br from-[#FF006B] to-[#CC0055] rounded-[32px] p-10 relative overflow-hidden group hover:scale-[1.01] transition-transform"
            >
              <h2 className="text-[36px] font-bold text-white leading-none text-left">
                By the<br />numbers
              </h2>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/15 rounded-3xl rotate-12"></div>
            </button>

            {/* Pricing - Purple */}
            <button
              onClick={() => setActiveModal('pricing')}
              className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-[32px] p-10 relative overflow-hidden group hover:scale-[1.01] transition-transform"
            >
              <h2 className="text-[36px] font-bold text-white leading-none text-left">
                Pricing
              </h2>

              <div className="absolute bottom-8 right-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
              </div>
            </button>

          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-2 gap-3">

            <button
              onClick={() => setActiveModal('demo')}
              className="col-span-2 bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] rounded-[28px] p-8 min-h-[220px] relative overflow-hidden"
            >
              <h2 className="text-[40px] font-bold text-white leading-none text-left">
                Try it live
              </h2>
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-white/10 rounded-full"></div>
            </button>

            <button
              onClick={() => setActiveModal('how')}
              className="bg-gradient-to-br from-[#0061FF] to-[#0047CC] rounded-[28px] p-6 min-h-[200px] relative"
            >
              <h2 className="text-[28px] font-bold text-white leading-none text-left">
                How it<br />works
              </h2>
            </button>

            <button
              onClick={() => setActiveModal('stats')}
              className="bg-gradient-to-br from-[#FF006B] to-[#CC0055] rounded-[28px] p-6 min-h-[200px] relative"
            >
              <h2 className="text-[28px] font-bold text-white leading-none text-left">
                By the<br />numbers
              </h2>
            </button>

            <button
              onClick={() => setActiveModal('calculator')}
              className="bg-gradient-to-br from-[#FFD60A] to-[#FFC700] rounded-[28px] p-6 min-h-[180px] relative"
            >
              <h2 className="text-[28px] font-bold text-black leading-none text-left">
                Cost<br />calculator
              </h2>
            </button>

            <button
              onClick={() => setActiveModal('pricing')}
              className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-[28px] p-6 min-h-[180px] relative"
            >
              <h2 className="text-[28px] font-bold text-white leading-none text-left">
                Pricing
              </h2>
            </button>

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
                <div>
                  <h1 className="text-[64px] font-bold mb-6 leading-none">Try our AI</h1>
                  <p className="text-[20px] text-gray-600 mb-12 max-w-2xl">
                    Experience our AI receptionist trained specifically for HVAC companies.
                  </p>

                  <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C61]/5 rounded-[32px] p-12">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-3 h-3 bg-[#FF6B35] rounded-full animate-pulse"></div>
                      <span className="text-gray-600">Live Demo</span>
                    </div>

                    <div className="flex items-center justify-center py-12">
                      {/* @ts-expect-error - Custom element */}
                      <elevenlabs-convai agent-id="agent_0901k81qxj1bemvrzmc72xa33r7w"></elevenlabs-convai>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'pricing' && (
                <div>
                  <h1 className="text-[64px] font-bold mb-6 leading-none">Pricing</h1>
                  <p className="text-[20px] text-gray-600 mb-12 max-w-2xl">
                    Simple, transparent pricing. All plans include 14-day free trial.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-[28px] p-8">
                      <h3 className="text-[24px] font-bold mb-4">Starter</h3>
                      <div className="text-[48px] font-bold mb-2">$297</div>
                      <div className="text-gray-600 mb-6">per month</div>
                      <ul className="space-y-3 mb-8 text-[16px]">
                        <li>750 minutes/month</li>
                        <li>~7-8 calls per day</li>
                        <li>24/7 AI receptionist</li>
                        <li>Appointment booking</li>
                        <li>Lead capture</li>
                      </ul>
                      <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-black/90 transition">
                        Start trial
                      </button>
                    </div>

                    <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#6D28D9]/5 border-2 border-[#7C3AED] rounded-[28px] p-8 relative">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white px-4 py-1 rounded-full text-[14px]">
                        Popular
                      </div>
                      <h3 className="text-[24px] font-bold mb-4 mt-2">Professional</h3>
                      <div className="text-[48px] font-bold mb-2">$597</div>
                      <div className="text-gray-600 mb-6">per month</div>
                      <ul className="space-y-3 mb-8 text-[16px]">
                        <li>2,000 minutes/month</li>
                        <li>~20 calls per day</li>
                        <li>Everything in Starter</li>
                        <li>SMS notifications</li>
                        <li>Call recordings</li>
                        <li>Analytics dashboard</li>
                      </ul>
                      <button className="w-full bg-[#7C3AED] text-white py-4 rounded-full font-medium hover:bg-[#6D28D9] transition">
                        Start trial
                      </button>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-[28px] p-8">
                      <h3 className="text-[24px] font-bold mb-4">Premium</h3>
                      <div className="text-[48px] font-bold mb-2">$1,497</div>
                      <div className="text-gray-600 mb-6">per month</div>
                      <ul className="space-y-3 mb-8 text-[16px]">
                        <li>6,000 minutes/month</li>
                        <li>~60 calls per day</li>
                        <li>Everything in Pro</li>
                        <li>Multi-location support</li>
                        <li>Custom voice training</li>
                        <li>Priority support</li>
                      </ul>
                      <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-black/90 transition">
                        Contact sales
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'calculator' && (
                <div>
                  <h1 className="text-[64px] font-bold mb-6 leading-none">Calculate savings</h1>
                  <p className="text-[20px] text-gray-600 mb-12 max-w-2xl">
                    See how much you'll save with Nokturn vs a traditional receptionist.
                  </p>

                  <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#FFD60A]/10 to-[#FFC700]/5 rounded-[32px] p-12">
                    <div className="mb-10">
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-600">Annual receptionist salary</span>
                        <span className="text-[32px] font-bold">${receptionistSalary.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="30000"
                        max="70000"
                        step="5000"
                        value={receptionistSalary}
                        onChange={(e) => setReceptionistSalary(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #000 0%, #000 ${((receptionistSalary - 30000) / 40000) * 100}%, #e5e5e5 ${((receptionistSalary - 30000) / 40000) * 100}%, #e5e5e5 100%)`
                        }}
                      />
                      <div className="flex justify-between text-gray-400 text-sm mt-2">
                        <span>$30k</span>
                        <span>$70k</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-white rounded-[20px] p-6">
                        <div className="text-sm text-gray-600 mb-2">Traditional</div>
                        <div className="text-[32px] font-bold">${(receptionistSalary * 1.3).toLocaleString()}</div>
                        <div className="text-sm text-gray-500">per year</div>
                      </div>
                      <div className="bg-[#00E676]/10 rounded-[20px] p-6">
                        <div className="text-sm text-gray-600 mb-2">Nokturn</div>
                        <div className="text-[32px] font-bold">$7,164</div>
                        <div className="text-sm text-gray-500">per year</div>
                      </div>
                    </div>

                    <div className="text-center bg-[#00E676]/10 rounded-[20px] p-8">
                      <div className="text-sm text-gray-600 mb-2">You save</div>
                      <div className="text-[56px] font-bold leading-none mb-4">
                        ${((receptionistSalary * 1.3) - 7164).toLocaleString()}
                      </div>
                      <div className="text-gray-600">
                        {(((receptionistSalary * 1.3) - 7164) / 7164).toFixed(1)}x ROI annually
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'how' && (
                <div>
                  <h1 className="text-[64px] font-bold mb-6 leading-none">How it works</h1>
                  <p className="text-[20px] text-gray-600 mb-12 max-w-2xl">
                    Get started in 5 minutes. No technical skills required.
                  </p>

                  <div className="space-y-12 max-w-2xl">
                    <div className="flex gap-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0061FF] to-[#0047CC] flex items-center justify-center flex-shrink-0">
                        <span className="text-[28px] font-bold text-white">1</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[28px] font-bold mb-3">Forward calls</h3>
                        <p className="text-[18px] text-gray-600 mb-4">
                          Simple call forwarding from your existing number.
                        </p>
                        <div className="bg-[#0061FF]/10 rounded-[20px] p-6">
                          <code className="text-[18px]">*72 + Nokturn number</code>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF006B] to-[#CC0055] flex items-center justify-center flex-shrink-0">
                        <span className="text-[28px] font-bold text-white">2</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[28px] font-bold mb-3">Configure AI</h3>
                        <p className="text-[18px] text-gray-600 mb-4">
                          Quick 2-minute form with your business details.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00E676] to-[#00C853] flex items-center justify-center flex-shrink-0">
                        <span className="text-[28px] font-bold text-white">3</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[28px] font-bold mb-3">Start capturing leads</h3>
                        <p className="text-[18px] text-gray-600 mb-4">
                          Your AI answers every call, 24/7.
                        </p>
                        <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/90 transition">
                          Get started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'stats' && (
                <div>
                  <h1 className="text-[64px] font-bold mb-6 leading-none">By the numbers</h1>
                  <p className="text-[20px] text-gray-600 mb-12 max-w-2xl">
                    Real performance metrics from our AI platform.
                  </p>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-[#FF006B]/10 to-[#CC0055]/5 rounded-[28px] p-10 text-center">
                      <div className="text-[72px] font-bold mb-4">100%</div>
                      <div className="text-[24px] font-bold mb-3">Calls answered</div>
                      <div className="text-gray-600">
                        Never miss a call. Our AI answers every time.
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#0061FF]/10 to-[#0047CC]/5 rounded-[28px] p-10 text-center">
                      <div className="text-[72px] font-bold mb-4">&lt;2s</div>
                      <div className="text-[24px] font-bold mb-3">Response time</div>
                      <div className="text-gray-600">
                        Faster than any human receptionist.
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#00E676]/10 to-[#00C853]/5 rounded-[28px] p-10 text-center">
                      <div className="text-[72px] font-bold mb-4">24/7</div>
                      <div className="text-[24px] font-bold mb-3">Always on</div>
                      <div className="text-gray-600">
                        No breaks, no sick days, no vacation.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto text-center text-gray-500 text-sm">
          © 2025 Nokturn
        </div>
      </footer>
    </div>
  );
}

export default App;
