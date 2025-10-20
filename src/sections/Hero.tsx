import { motion } from 'framer-motion';
import { Phone, ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Button } from '../components';

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-hero-gradient pt-32 pb-20 px-4 md:px-8">
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-accent-pink/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-48 h-48 bg-accent-cyan/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent-lime/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white font-semibold text-sm">AI-Powered HVAC Assistant</span>
          </div>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-hero-mobile md:text-hero text-white text-center max-w-5xl mx-auto mb-8"
        >
          Never Miss a
          <span className="block mt-2 bg-gradient-to-r from-accent-cyan via-accent-pink to-accent-orange bg-clip-text text-transparent">
            Customer Call
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-body-large md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-12"
        >
          Your AI receptionist answers every call, books appointments instantly, and captures leads 24/7.
          <span className="block mt-2 text-white font-semibold">Setup in 5 minutes. Keep your current number.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6"
        >
          <Button size="large" className="shadow-2xl">
            Try Free for 14 Days
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="large" variant="secondary">
            <Phone className="mr-2 w-5 h-5" />
            Call Demo: (555) 123-HVAC
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-center text-sm"
        >
          No credit card required • Cancel anytime
        </motion.p>

        {/* Interactive Demo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 max-w-4xl mx-auto"
        >
          {/* Floating container with glass morphism */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <Zap className="w-8 h-8 text-accent-lime mb-3" />
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-white/70 text-sm">Calls Answered</div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <TrendingUp className="w-8 h-8 text-accent-cyan mb-3" />
                <div className="text-3xl font-bold text-white mb-1">3.2x</div>
                <div className="text-white/70 text-sm">More Bookings</div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <Phone className="w-8 h-8 text-accent-pink mb-3" />
                <div className="text-3xl font-bold text-white mb-1">&lt;2 sec</div>
                <div className="text-white/70 text-sm">Response Time</div>
              </motion.div>
            </div>

            {/* Process Flow */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col items-center flex-1"
              >
                <div className="bg-gradient-to-br from-white/20 to-white/5 p-5 rounded-2xl border border-white/30 mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold text-center">Customer Calls</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="hidden md:block"
              >
                <ArrowRight className="w-6 h-6 text-white/50" />
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-col items-center flex-1"
              >
                <div className="bg-gradient-to-br from-accent-pink to-accent-orange p-5 rounded-2xl mb-4 relative">
                  <div className="flex gap-1.5">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  </div>
                  {/* Pulsing glow */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-accent-pink rounded-2xl blur-xl"
                  />
                </div>
                <div className="text-white font-semibold text-center">AI Responds</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="hidden md:block"
              >
                <ArrowRight className="w-6 h-6 text-white/50" />
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex flex-col items-center flex-1"
              >
                <div className="bg-gradient-to-br from-accent-lime to-accent-cyan p-5 rounded-2xl border border-accent-lime/30 mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="text-white font-semibold text-center">Appointment Booked</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { duration: 1, delay: 2 }, y: { duration: 2, repeat: Infinity } }}
          className="flex justify-center mt-16"
        >
          <div className="text-white/50 text-sm">
            Scroll to explore
          </div>
        </motion.div>
      </div>
    </section>
  );
};
