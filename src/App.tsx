import { Phone, ArrowRight, Zap, Clock, Calendar, Shield, DollarSign, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

function App() {
  // ROI Calculator State
  const [ticketValue, setTicketValue] = useState(2500);
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(5);

  // ROI Calculations
  const weeklyLost = ticketValue * missedCallsPerWeek;
  const monthlyLost = weeklyLost * 4;
  const annualLost = monthlyLost * 12;
  const clientFlowCost = 597 * 12; // Using Professional tier
  const annualSavings = annualLost - clientFlowCost;
  const roi = ((annualSavings / clientFlowCost) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
          Stop Losing <span className="text-[#0066FF]">$2,500 Emergency Calls</span> to Voicemail
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
          Your AI receptionist answers in under 2 seconds, books appointments instantly, and captures every lead—24/7.
        </p>

        <p className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto px-2">
          Keep your current number. Setup in 5 minutes. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 px-4">
          <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold transition flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto">
            Start Free 14-Day Trial
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="tel:5551234822"
            className="bg-transparent border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold transition flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call Demo: (555) 123-HVAC
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 px-4">No credit card • Cancel anytime • Setup in 5 minutes</p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6 sm:p-8">
            <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#0066FF]">100%</div>
            <div className="text-gray-300 font-medium text-sm sm:text-base">Calls Answered</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Never miss another lead</div>
          </div>
          <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6 sm:p-8">
            <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#0066FF]">&lt;2 sec</div>
            <div className="text-gray-300 font-medium text-sm sm:text-base">Response Time</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Faster than any human</div>
          </div>
          <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6 sm:p-8">
            <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#0066FF]">24/7</div>
            <div className="text-gray-300 font-medium text-sm sm:text-base">Always Available</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Nights, weekends, holidays</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center px-2">
            Everything You Need to <span className="text-[#0066FF]">Capture Every Lead</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 sm:mb-16 text-base sm:text-lg px-4">Built specifically for HVAC businesses</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-8 hover:border-[#0066FF] transition">
              <div className="bg-[#0066FF]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-gray-400">Never miss emergency calls at 2 AM. Your AI receptionist works around the clock, even on holidays.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-8 hover:border-[#0066FF] transition">
              <div className="bg-[#0066FF]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Booking</h3>
              <p className="text-gray-400">Books appointments directly into your calendar while you're out on jobs. No more phone tag.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-8 hover:border-[#0066FF] transition">
              <div className="bg-[#0066FF]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Routing</h3>
              <p className="text-gray-400">Urgent calls get escalated immediately. Routine questions handled automatically. You stay focused.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-8 hover:border-[#0066FF] transition">
              <div className="bg-[#0066FF]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lead Capture</h3>
              <p className="text-gray-400">Every caller's info captured and organized. Names, addresses, issues—all logged automatically.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-8 hover:border-[#0066FF] transition">
              <div className="bg-[#0066FF]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Keep Your Number</h3>
              <p className="text-gray-400">Use your existing phone number. Simple call forwarding. Setup takes 5 minutes, not 5 days.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-8 hover:border-[#0066FF] transition">
              <div className="bg-[#0066FF]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Analytics</h3>
              <p className="text-gray-400">See what customers are calling about. Track peak times. Make data-driven decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#1A1F2E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center px-2">
            Setup in <span className="text-[#0066FF]">5 Minutes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12 sm:mb-16 px-4">
            No complex installation. No technical skills required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Step 1 */}
            <div className="text-center px-4">
              <div className="bg-[#0066FF] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                1
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Forward Your Calls</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Simple call forwarding from your existing phone number. Keep the number your customers know.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center px-4">
              <div className="bg-[#0066FF] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                2
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Answer A Few Questions</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Your business name, services, pricing, and hours. Simple form takes 2 minutes to fill out.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center px-4">
              <div className="bg-[#0066FF] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                3
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Start Capturing Leads</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Your AI receptionist answers every call, books appointments, and captures leads—starting now.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center px-4">
            <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-10 sm:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold transition inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs sm:text-sm text-gray-500 mt-4">14-day free trial • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 px-2">
            Hear ClientFlow in Action
          </h2>

          <div className="bg-[#0F172A] border-2 border-[#0066FF] rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
            <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-[#0066FF] mx-auto mb-4 sm:mb-6" />
            <a
              href="tel:5551234822"
              className="text-3xl sm:text-4xl md:text-5xl font-bold hover:text-[#0066FF] transition block mb-3 sm:mb-4"
            >
              (555) 123-HVAC
            </a>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">Call now to talk to our AI receptionist</p>
            <a
              href="tel:5551234822"
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-lg text-sm sm:text-base font-semibold transition inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center px-2">
            You're Hemorrhaging Money <span className="text-red-400">Every Single Day</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            While you're out fixing AC units, high-value emergency calls are going straight to voicemail
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Lost Call Scenarios */}
            <div className="bg-red-900/10 border-2 border-red-800/50 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-2">40% of Calls After 5 PM</h3>
                  <p className="text-sm sm:text-base text-gray-300">Emergency HVAC calls happen at night and weekends—exactly when you can't answer.</p>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 bg-red-950/30 rounded-lg p-3 sm:p-4">
                <strong className="text-red-300">Result:</strong> Customer calls your competitor who picked up in 10 seconds.
              </div>
            </div>

            <div className="bg-red-900/10 border-2 border-red-800/50 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-red-500/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-2">$2,500 Average Emergency Call</h3>
                  <p className="text-sm sm:text-base text-gray-300">AC replacements, furnace repairs, emergency service—these are your most profitable jobs.</p>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 bg-red-950/30 rounded-lg p-3 sm:p-4">
                <strong className="text-red-300">Reality:</strong> Just 2-3 missed calls per week = $250,000+ lost annually.
              </div>
            </div>
          </div>

          <div className="bg-[#1E293B] border-2 border-gray-700 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Meanwhile, you're paying a receptionist <span className="text-white font-bold">$40,000-$50,000/year</span> who only works
              <span className="text-red-400 font-bold"> 8 hours a day, 5 days a week</span>...
              and still can't answer when they're on lunch, sick, or on vacation.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#1A1F2E]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center px-2">
            Calculate Your <span className="text-[#0066FF]">Lost Revenue</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-10 sm:mb-12 px-4">
            See exactly how much money you're leaving on the table
          </p>

          <div className="bg-[#0F172A] border-2 border-[#0066FF] rounded-2xl p-6 sm:p-8 md:p-12">
            {/* Calculator Inputs */}
            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
              {/* Slider 1: Average Service Ticket */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                  <label className="text-base sm:text-lg font-semibold text-white">Average Service Ticket Value</label>
                  <span className="text-xl sm:text-2xl font-bold text-[#0066FF]">${ticketValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={ticketValue}
                  onChange={(e) => setTicketValue(Number(e.target.value))}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$500</span>
                  <span>$5,000</span>
                </div>
              </div>

              {/* Slider 2: Missed Calls */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                  <label className="text-base sm:text-lg font-semibold text-white">Missed Calls Per Week</label>
                  <span className="text-xl sm:text-2xl font-bold text-[#0066FF]">{missedCallsPerWeek}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={missedCallsPerWeek}
                  onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 call</span>
                  <span>20 calls</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border-2 border-red-500/50 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">You're Losing:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">Per Week</div>
                  <div className="text-2xl sm:text-3xl font-bold text-red-400">${weeklyLost.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">Per Month</div>
                  <div className="text-2xl sm:text-3xl font-bold text-red-400">${monthlyLost.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">Per Year</div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-400">${annualLost.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Savings with ClientFlow */}
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-2 border-green-500/50 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-white px-2">With ClientFlow Professional ($597/mo):</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">Annual Revenue Captured</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400">${annualLost.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">Net Savings (After ClientFlow Cost)</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400">${annualSavings.toLocaleString()}</div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-green-500/30 text-center">
                <div className="text-xs sm:text-sm text-gray-400 mb-2">Return on Investment</div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                  {roi > 0 ? roi : 0}%
                </div>
                <p className="text-sm sm:text-base text-gray-300 mt-4 px-2">
                  For every $1 you spend on ClientFlow, you make ${(Number(roi) / 100 + 1).toFixed(2)}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10 text-center">
              <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold transition inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto">
                Start Capturing These Leads
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs sm:text-sm text-gray-500 mt-4">14-day free trial • No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center px-2">Choose Your Plan</h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-12 sm:mb-16 px-4">Based on your monthly call volume</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            {/* Starter */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">STARTER</h3>
              <div className="text-5xl font-bold mb-2">$297</div>
              <div className="text-gray-400 mb-6">per month</div>

              <div className="mb-6 pb-6 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-2">Perfect for:</p>
                <p className="text-gray-300 mb-4">Solo operators & small teams</p>
                <p className="font-semibold text-white">750 minutes/mo</p>
                <p className="text-sm text-gray-500">(~7-8 calls per day)</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'AI Receptionist 24/7',
                  'Appointment Booking',
                  'Google Calendar Sync',
                  'Lead Capture & CRM',
                  'Call History & Logs',
                  '1 User Account'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-4 rounded-lg font-bold transition">
                Start Free Trial
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">$9.88/day</p>
            </div>

            {/* Professional - Highlighted */}
            <div className="bg-[#1E293B] border-2 border-[#0066FF] rounded-xl p-8 h-full flex flex-col relative pt-12 shadow-lg shadow-[#0066FF]/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0066FF] px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold mb-4">PROFESSIONAL</h3>
              <div className="text-5xl font-bold mb-2 text-[#0066FF]">$597</div>
              <div className="text-gray-400 mb-6">per month</div>

              <div className="mb-6 pb-6 border-b border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Perfect for:</p>
                <p className="text-gray-300 mb-4">Growing HVAC businesses</p>
                <p className="font-semibold text-white">2,000 minutes/mo</p>
                <p className="text-sm text-gray-500">(~20 calls per day)</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'Everything in Starter',
                  'SMS & Email Notifications',
                  'Call Recording & Transcripts',
                  'Advanced Analytics',
                  '3 User Accounts',
                  'Priority Support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-4 rounded-lg font-bold transition shadow-lg">
                Start Free Trial
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">$19.90/day</p>
            </div>

            {/* Premium */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">PREMIUM</h3>
              <div className="text-5xl font-bold mb-2">$1,497</div>
              <div className="text-gray-400 mb-6">per month</div>

              <div className="mb-6 pb-6 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-2">Perfect for:</p>
                <p className="text-gray-300 mb-4">High-volume & multi-location</p>
                <p className="font-semibold text-white">6,000 minutes/mo</p>
                <p className="text-sm text-gray-500">(~60 calls per day)</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'Everything in Professional',
                  '3x Call Volume',
                  'Multi-location Support',
                  'Custom Voice Training',
                  'Unlimited User Accounts',
                  'Dedicated Phone Support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-transparent border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white px-6 py-4 rounded-lg font-bold transition">
                Contact Sales
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">$49.90/day</p>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12">
            All plans include 14-day free trial • No setup fees • No contracts • Cancel anytime
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center px-2">
            Common Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12 sm:mb-16 px-4">
            Everything you need to know about ClientFlow
          </p>

          <div className="space-y-4 sm:space-y-6">
            {/* FAQ 1 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">How long does setup actually take?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Seriously, 5 minutes. You forward your calls, answer a few questions about your business (services, pricing, hours), and you're live. Most HVAC businesses are fully operational within one phone call to our team.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">Can I keep my current phone number?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Yes. You keep your existing number—the one on your truck, website, and Google listing. We just use simple call forwarding. Your customers never know the difference.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">What happens if the AI can't handle a call?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                The AI transfers complex or urgent calls directly to you or your team. You set the rules—emergency calls, specific customer requests, or technical questions can all be routed to a real person instantly.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">How is this different from a traditional receptionist?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                A receptionist costs $40-50k/year, works 8 hours a day, needs breaks, gets sick, and takes vacation. ClientFlow costs $297-1,497/month, works 24/7/365, never takes a break, and answers in under 2 seconds. Every single time.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">What if I need to cancel?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Cancel anytime. No contracts, no cancellation fees, no questions asked. You can turn off call forwarding in 30 seconds and you're done. We only keep customers who see real value.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">Does it integrate with my calendar and CRM?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Yes. We integrate with Google Calendar, Outlook, ServiceTitan, Housecall Pro, and most major HVAC software. Appointments book directly into your existing system—no double data entry.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center px-4">
            <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">Still have questions?</p>
            <a
              href="tel:5551234822"
              className="inline-flex items-center gap-2 text-[#0066FF] hover:text-[#0052CC] font-semibold text-base sm:text-lg transition"
            >
              <Phone className="w-5 h-5" />
              Call us at (555) 123-HVAC
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 bg-gradient-to-b from-[#1A1F2E] to-[#0F172A] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight px-2">
            Stop Losing Leads. Start Growing.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 px-4">
            Every minute you wait, another emergency call goes to your competitor.
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-12 px-4">
            Start your 14-day free trial now. Setup in 5 minutes. No credit card required.
          </p>

          <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-10 sm:px-16 py-5 sm:py-6 rounded-lg font-bold text-lg sm:text-xl transition mb-8 shadow-lg inline-flex items-center justify-center gap-3 w-full sm:w-auto mx-4">
            Start Free Trial Now
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-300">
              <CheckCircle className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-300">
              <CheckCircle className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-300">
              <CheckCircle className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-[#0A0E1A] border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 ClientFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
