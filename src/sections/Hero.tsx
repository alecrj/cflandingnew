import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Button, Section } from '../components';

export const Hero = () => {
  return (
    <Section background="white" className="pt-24 md:pt-32">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-hero-mobile lg:md:text-hero font-bold text-primary-900 max-w-4xl mx-auto leading-tight"
        >
          Never Miss an HVAC Customer Call
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-body-large text-primary-600 max-w-2xl mx-auto mt-6"
        >
          AI receptionist answers every call, books appointments, and captures leads 24/7.
          Keep your current number. Setup in 5 minutes.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <Button size="large" className="w-full md:w-auto">
            Try Free for 14 Days
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-caption text-primary-500">
            No credit card required
          </p>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4"
        >
          <a
            href="tel:5551234822"
            className="text-body text-primary-600 hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Or call (555) 123-HVAC to hear it now
          </a>
        </motion.div>

        {/* Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-24 max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Floating animation container */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-br from-accent/10 to-success/10 rounded-2xl p-12 md:p-16 border border-accent/20"
            >
              {/* Phone Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center mb-8"
              >
                <div className="bg-accent/10 p-6 rounded-full">
                  <Phone className="w-16 h-16 text-accent" strokeWidth={2} />
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
                  <div className="bg-white p-4 rounded-xl shadow-subtle border border-primary-200">
                    <Phone className="w-8 h-8 text-primary-900" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-primary-900">Call Rings</p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-6 h-6 text-accent" />
                </motion.div>

                {/* Step 2: AI Processing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-accent p-4 rounded-xl shadow-lift">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-accent">AI Answers</p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-6 h-6 text-accent" />
                </motion.div>

                {/* Step 3: Appointment Booked */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-success p-4 rounded-xl shadow-lift">
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
                  <p className="mt-2 text-sm font-medium text-success">Booked!</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
