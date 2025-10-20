import { Phone, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Hero Section */}
      <section className="px-6 py-32 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Never Miss an HVAC <span className="text-[#0066FF]">Customer Call</span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          AI receptionist answers every call, books appointments, and captures leads 24/7.
          Keep your current number. Setup in 5 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2">
            Try Free for 14 Days
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="tel:5551234822"
            className="bg-transparent border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Demo: (555) 123-HVAC
          </a>
        </div>

        <p className="text-sm text-gray-500">No credit card required</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
          <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm text-gray-400">Calls Answered</div>
          </div>
          <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">3.2x</div>
            <div className="text-sm text-gray-400">More Bookings</div>
          </div>
          <div className="bg-[#1E293B] border border-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">&lt;2 sec</div>
            <div className="text-sm text-gray-400">Response Time</div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="px-6 py-24 bg-[#1A1F2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Hear ClientFlow in Action
          </h2>

          <div className="bg-[#0F172A] border-2 border-[#0066FF] rounded-2xl p-12 max-w-2xl mx-auto">
            <Phone className="w-12 h-12 text-[#0066FF] mx-auto mb-6" />
            <a
              href="tel:5551234822"
              className="text-5xl font-bold hover:text-[#0066FF] transition block mb-4"
            >
              (555) 123-HVAC
            </a>
            <p className="text-gray-400 mb-8">Call now to talk to our AI receptionist</p>
            <a
              href="tel:5551234822"
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-lg font-semibold transition inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-24 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            You're Losing Money Every Single Day
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '40% of Calls', desc: 'Happen after 5 PM' },
              { stat: 'Those Calls', desc: 'Go to voicemail' },
              { stat: '$50,000+', desc: 'Lost revenue annually' },
              { stat: 'Customers Call', desc: 'Your competitor instead' }
            ].map((item, i) => (
              <div key={i} className="bg-red-900/20 border border-red-800/50 rounded-xl p-6">
                <div className="text-2xl font-bold text-red-400 mb-2">{item.stat}</div>
                <div className="text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 italic mt-12 text-lg">
            Meanwhile, you're paying $45,000/year for a receptionist who only works 8 hours a day
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-24 bg-[#1A1F2E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Choose Your Plan</h2>
          <p className="text-gray-400 text-center mb-16">Based on your monthly call volume</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">STARTER</h3>
              <div className="text-4xl font-bold mb-6">$699<span className="text-lg text-gray-400">/mo</span></div>

              <div className="mb-6 pb-6 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-2">Perfect for:</p>
                <p className="text-gray-300 mb-4">Solo operators & testing</p>
                <p className="font-semibold">1,500 minutes/mo</p>
                <p className="text-sm text-gray-400">(~15 calls/day)</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'AI Receptionist 24/7',
                  'Appointment Booking',
                  'Google Calendar',
                  'Customer CRM',
                  'Call Logs',
                  '1 User Login'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-success mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-3 rounded-lg font-semibold transition">
                Start Trial
              </button>
            </div>

            {/* Professional - Highlighted */}
            <div className="bg-[#0F172A] border-2 border-[#0066FF] rounded-xl p-8 h-full flex flex-col relative pt-12">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0066FF] px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold mb-4">PROFESSIONAL</h3>
              <div className="text-4xl font-bold mb-6">$1,299<span className="text-lg text-gray-400">/mo</span></div>

              <div className="mb-6 pb-6 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-2">Perfect for:</p>
                <p className="text-gray-300 mb-4">Small businesses 1-5 employees</p>
                <p className="font-semibold">3,500 minutes/mo</p>
                <p className="text-sm text-gray-400">(~35 calls/day)</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'Everything in Starter',
                  'SMS Notifications',
                  'Call Recording',
                  '3 User Accounts',
                  'Priority Support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-success mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-3 rounded-lg font-semibold transition">
                Start Trial
              </button>
            </div>

            {/* Premium */}
            <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">PREMIUM</h3>
              <div className="text-4xl font-bold mb-6">$2,199<span className="text-lg text-gray-400">/mo</span></div>

              <div className="mb-6 pb-6 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-2">Perfect for:</p>
                <p className="text-gray-300 mb-4">High volume & multi-location</p>
                <p className="font-semibold">9,000 minutes/mo</p>
                <p className="text-sm text-gray-400">(~90 calls/day)</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  'Everything in Professional',
                  '3x Call Volume',
                  'Multi-location',
                  'Unlimited Users',
                  'Phone Support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-success mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-transparent border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white px-6 py-3 rounded-lg font-semibold transition">
                Contact Sales
              </button>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12">
            All plans include 14-day free trial • No setup fees • No contracts • Cancel anytime
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-32 bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Start Capturing Every HVAC Lead Today
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Setup takes 5 minutes. Start your free trial now.
        </p>

        <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-12 py-5 rounded-lg font-bold text-lg transition mb-8">
          Start Free Trial
        </button>

        <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-success">✓</span>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success">✓</span>
            Setup in 5 minutes
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success">✓</span>
            Cancel anytime
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
