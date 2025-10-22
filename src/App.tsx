/// <reference path="./custom-elements.d.ts" />
import { Phone, ArrowRight, DollarSign, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

function App() {
  // ROI Calculator State
  const [ticketValue, setTicketValue] = useState(2500);
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(5);

  // Cost Comparison State
  const [receptionistSalary, setReceptionistSalary] = useState(45000);

  // ROI Calculations
  const weeklyLost = ticketValue * missedCallsPerWeek;
  const monthlyLost = weeklyLost * 4;
  const annualLost = monthlyLost * 12;
  const clientFlowCost = 597 * 12; // Using Professional tier
  const annualSavings = annualLost - clientFlowCost;
  const roiPercent = ((annualSavings / clientFlowCost) * 100);
  const roi = roiPercent.toFixed(0);

  return (
    <div className="min-h-screen bg-[#0A0E14] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0E14]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">ClientFlow</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#demo" className="text-gray-400 hover:text-white transition">Demo</a>
            </div>

            <div className="flex items-center gap-3">
              <a href="tel:5551234822" className="hidden sm:block text-sm text-gray-400 hover:text-white transition">
                (555) 123-HVAC
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Tight & Product-Focused */}
      <section id="demo" className="px-4 sm:px-6 pt-32 sm:pt-36 pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Headline - Much Smaller */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight tracking-tight">
              Answer every call.
              <br />
              Never lose a lead.
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              AI receptionist for HVAC companies. Answers in under 2 seconds, books appointments, captures leads—24/7.
            </p>
          </div>

          {/* Voice Demo - Front and Center */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Live Demo</span>
                </div>
                <span className="text-xs text-gray-500">Click to talk</span>
              </div>

              <div className="w-full flex items-center justify-center py-4">
                {/* @ts-expect-error - Custom element from ElevenLabs */}
                <elevenlabs-convai agent-id="agent_0901k81qxj1bemvrzmc72xa33r7w"></elevenlabs-convai>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mb-20">
            <button className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-500">14-day trial • No credit card • 5-min setup</p>
          </div>

          {/* Quick Stats - Minimal */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/5">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-1">100%</div>
              <div className="text-sm text-gray-500">Calls answered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-1">&lt;2s</div>
              <div className="text-sm text-gray-500">Response time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-1">24/7</div>
              <div className="text-sm text-gray-500">Always on</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Calculator - THE MAIN SALES TOOL */}
      <section id="features" className="px-4 sm:px-6 py-24 sm:py-32 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              You're paying 10x more for 24% coverage
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Receptionists work 40 hours/week. ClientFlow works 168 hours—at a fraction of the cost.
            </p>
          </div>

          {/* Comparison Calculator */}
          <div className="bg-[#0D1117] border border-gray-800/50 rounded-3xl p-8 sm:p-12 shadow-2xl">
            {/* Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-base font-medium text-white">Receptionist Annual Salary</label>
                <span className="text-2xl font-bold text-blue-500">
                  ${receptionistSalary.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="30000"
                max="70000"
                step="5000"
                value={receptionistSalary}
                onChange={(e) => setReceptionistSalary(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider-blue"
                style={{
                  background: `linear-gradient(to right, #0066FF 0%, #06B6D4 ${((receptionistSalary - 30000) / 40000) * 100}%, #1f2937 ${((receptionistSalary - 30000) / 40000) * 100}%, #1f2937 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$30,000</span>
                <span>$70,000</span>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional Receptionist */}
              <div className="bg-red-950/20 border border-red-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-bold text-white">Traditional Receptionist</h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Annual Salary</span>
                    <span className="font-semibold text-white">${receptionistSalary.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Benefits (30%)</span>
                    <span className="font-semibold text-white">${(receptionistSalary * 0.3).toLocaleString()}</span>
                  </div>
                  <div className="h-px bg-red-500/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">Total Annual Cost</span>
                    <span className="text-xl font-bold text-red-400">${(receptionistSalary * 1.3).toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <XCircle className="w-4 h-4 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Only 40 hours/week (24% coverage)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <XCircle className="w-4 h-4 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Sick days, vacations, breaks</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <XCircle className="w-4 h-4 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Training & management time</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <XCircle className="w-4 h-4 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Misses 76% of calls (nights/weekends)</span>
                  </div>
                </div>
              </div>

              {/* ClientFlow */}
              <div className="bg-blue-950/30 border border-blue-500/40 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-white">ClientFlow AI</h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Annual Cost</span>
                    <span className="font-semibold text-white">$7,164</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Setup & Training</span>
                    <span className="font-semibold text-white">$0</span>
                  </div>
                  <div className="h-px bg-blue-500/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">Total Annual Cost</span>
                    <span className="text-xl font-bold text-green-400">$7,164</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>24/7/365 coverage (100%)</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Never sick, never takes breaks</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Zero setup or training time</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Answers in &lt;2 seconds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="mt-6 bg-green-950/30 border border-green-500/30 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-400 mb-2">Your Annual Savings</p>
              <p className="text-4xl sm:text-5xl font-bold text-green-400 mb-3">
                ${((receptionistSalary * 1.3) - 7164).toLocaleString()}
              </p>
              <p className="text-base text-gray-300">
                {(((receptionistSalary * 1.3) - 7164) / 7164).toFixed(1)}x ROI while getting 4x more coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#0A0E14]">
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
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6 shadow-glow-blue">
                1
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Forward Your Calls</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Simple call forwarding from your existing phone number. Keep the number your customers know.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center px-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6 shadow-glow-blue">
                2
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Answer A Few Questions</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Your business name, services, pricing, and hours. Simple form takes 2 minutes to fill out.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center px-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6 shadow-glow-blue">
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

      {/* Problem Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-[#0A0E14]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center px-2">
            You're Hemorrhaging Money <span className="text-red-400">Every Single Day</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            While you're out fixing AC units, high-value emergency calls are going straight to voicemail
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Lost Call Scenarios */}
            <div className="bg-red-900/10 shadow-premium rounded-2xl p-6 sm:p-8 border border-red-800/30">
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

            <div className="bg-red-900/10 shadow-premium rounded-2xl p-6 sm:p-8 border border-red-800/30">
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

          <div className="bg-[#151922] shadow-premium-lg rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-center border border-gray-800/50">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Meanwhile, you're paying a receptionist <span className="text-white font-bold">$40,000-$50,000/year</span> who only works
              <span className="text-red-400 font-bold"> 8 hours a day, 5 days a week</span>...
              and still can't answer when they're on lunch, sick, or on vacation.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 bg-[#0A0E14] relative overflow-hidden">
        {/* Gradient mesh */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center px-2">
            Calculate Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Lost Revenue</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12 sm:mb-16 px-4">
            See exactly how much money you're leaving on the table
          </p>

          <div className="glass-strong shadow-glow-blue rounded-3xl p-8 sm:p-10 md:p-14">
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
                  {roiPercent > 0 ? roi : 0}%
                </div>
                <p className="text-sm sm:text-base text-gray-300 mt-4 px-2">
                  For every $1 you spend on ClientFlow, you make ${(roiPercent / 100 + 1).toFixed(2)}
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
      <section id="pricing" className="px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Simple pricing</h2>
            <p className="text-gray-400">Choose based on your call volume</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
            {/* Starter */}
            <div className="bg-[#151922] shadow-premium rounded-2xl p-8 h-full flex flex-col hover:shadow-premium-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">STARTER</h3>
              <div className="text-5xl font-bold mb-2 bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">$297</div>
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
            <div className="relative h-full">
              {/* Animated gradient glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 animate-pulse"></div>

              <div className="relative bg-[#151922] rounded-2xl p-8 h-full flex flex-col pt-14 shadow-glow-blue">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
                  MOST POPULAR
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">PROFESSIONAL</h3>
                <div className="text-6xl font-bold mb-2 bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">$597</div>
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

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-4 rounded-lg font-bold transition shadow-lg">
                  Start Free Trial
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">$19.90/day</p>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-[#151922] shadow-premium rounded-2xl p-8 h-full flex flex-col hover:shadow-premium-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">PREMIUM</h3>
              <div className="text-5xl font-bold mb-2 bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">$1,497</div>
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

              <button className="w-full bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-4 rounded-lg font-bold transition">
                Contact Sales
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">$49.90/day</p>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-16 text-sm sm:text-base">
            All plans include 14-day free trial • No setup fees • No contracts • Cancel anytime
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 bg-[#0A0E14]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center px-2">
            Common Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-16 sm:mb-20 px-4">
            Everything you need to know about ClientFlow
          </p>

          <div className="space-y-5 sm:space-y-6">
            {/* FAQ 1 */}
            <div className="bg-[#151922] shadow-premium rounded-2xl p-6 sm:p-8 hover:shadow-premium-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">How long does setup actually take?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Seriously, 5 minutes. You forward your calls, answer a few questions about your business (services, pricing, hours), and you're live. Most HVAC businesses are fully operational within one phone call to our team.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#151922] shadow-premium rounded-2xl hover:shadow-premium-lg transition-all duration-300 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">Can I keep my current phone number?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Yes. You keep your existing number—the one on your truck, website, and Google listing. We just use simple call forwarding. Your customers never know the difference.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#151922] shadow-premium rounded-2xl hover:shadow-premium-lg transition-all duration-300 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">What happens if the AI can't handle a call?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                The AI transfers complex or urgent calls directly to you or your team. You set the rules—emergency calls, specific customer requests, or technical questions can all be routed to a real person instantly.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#151922] shadow-premium rounded-2xl hover:shadow-premium-lg transition-all duration-300 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">How is this different from a traditional receptionist?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                A receptionist costs $40-50k/year, works 8 hours a day, needs breaks, gets sick, and takes vacation. ClientFlow costs $297-1,497/month, works 24/7/365, never takes a break, and answers in under 2 seconds. Every single time.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-[#151922] shadow-premium rounded-2xl hover:shadow-premium-lg transition-all duration-300 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">What if I need to cancel?</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Cancel anytime. No contracts, no cancellation fees, no questions asked. You can turn off call forwarding in 30 seconds and you're done. We only keep customers who see real value.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-[#151922] shadow-premium rounded-2xl hover:shadow-premium-lg transition-all duration-300 p-6 sm:p-8">
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
