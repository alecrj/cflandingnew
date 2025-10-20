import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Button, Section } from '../components';

export const Hero = () => {
  return (
    <Section background="white" className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] leading-[1.1] md:text-[56px] lg:text-[64px] font-bold text-primary-900 max-w-4xl mx-auto tracking-tight"
        >
          Never Miss an HVAC Customer Call
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-600/90 max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          AI receptionist answers every call, books appointments, and captures leads 24/7.
          Keep your current number. Setup in 5 minutes.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <Button size="large" className="w-full sm:w-auto">
            Try Free for 14 Days
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-primary-500">
            No credit card required
          </p>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6"
        >
          <a
            href="tel:5551234822"
            className="text-[15px] text-primary-600/80 hover:text-accent-500 transition-colors inline-flex items-center gap-2 group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Or call (555) 123-HVAC to hear it now
          </a>
        </motion.div>

        {/* Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-20 max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Floating animation container */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-br from-accent-50 via-primary-50 to-success-50 rounded-3xl p-10 md:p-14 border border-primary-200/60 shadow-sm"
            >
              {/* Phone Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center mb-10"
              >
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-primary-200/60">
                  <Phone className="w-12 h-12 text-accent-500" strokeWidth={2} />
                </div>
              </motion.div>

              {/* Process Steps */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
                {/* Step 1: Call Incoming */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-primary-200/60">
                    <Phone className="w-7 h-7 text-primary-700" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-primary-700">Call Rings</p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-5 h-5 text-primary-300" />
                </motion.div>

                {/* Step 2: AI Processing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-accent-500 p-4 rounded-2xl shadow-sm">
                    <div className="flex gap-1.5">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-accent-600">AI Answers</p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-5 h-5 text-primary-300" />
                </motion.div>

                {/* Step 3: Appointment Booked */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-success-500 p-4 rounded-2xl shadow-sm">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-success-600">Booked!</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
