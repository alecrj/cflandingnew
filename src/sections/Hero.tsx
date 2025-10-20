import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Button, Section } from '../components';

export const Hero = () => {
  return (
    <Section background="white" className="pt-24 md:pt-40">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-hero-mobile md:text-hero font-bold text-text-primary max-w-3xl mx-auto"
        >
          Never Miss an HVAC Customer Call
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-large text-text-secondary max-w-2xl mx-auto mt-8"
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
          <Button size="large">
            Try Free for 14 Days
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-caption text-text-tertiary">
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
            className="text-caption text-text-secondary hover:text-brand-purple transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Or call (555) 123-HVAC to hear it now
          </a>
        </motion.div>

        {/* Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 md:mt-24 max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Floating animation container */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-bg-tertiary rounded-2xl p-12 md:p-16 border border-border-light"
            >
              {/* Phone Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center mb-12"
              >
                <div className="bg-bg-primary p-6 rounded-xl border border-border-light">
                  <Phone className="w-10 h-10 text-brand-purple" strokeWidth={2} />
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
                  <div className="bg-bg-primary p-4 rounded-xl border border-border-light">
                    <Phone className="w-6 h-6 text-text-secondary" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-text-secondary">Call Rings</p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-5 h-5 text-border-medium" />
                </motion.div>

                {/* Step 2: AI Processing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-brand-purple p-4 rounded-xl">
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
                  <p className="mt-3 text-sm font-medium text-brand-purple">AI Answers</p>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-5 h-5 text-border-medium" />
                </motion.div>

                {/* Step 3: Appointment Booked */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-success p-4 rounded-xl">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <p className="mt-3 text-sm font-medium text-success">Booked!</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
