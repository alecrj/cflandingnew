import { motion } from 'framer-motion';
import { Check, Phone } from 'lucide-react';
import { Button, Section } from '../components';

export const FinalCTA = () => {
  const trustSignals = [
    'No credit card required',
    'Setup in 5 minutes',
    'Cancel anytime',
    '30-day money back guarantee'
  ];

  return (
    <Section background="dark" className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-success rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-section-mobile lg:text-section font-bold mb-6"
        >
          Start Capturing Every HVAC Lead Today
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-body-large text-gray-300 mb-12"
        >
          Setup takes 5 minutes. Start your free trial now.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(0, 102, 255, 0.4)',
                '0 0 0 10px rgba(0, 102, 255, 0)',
                '0 0 0 0 rgba(0, 102, 255, 0)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="rounded-lg"
          >
            <Button size="large" className="w-full sm:w-auto shadow-lift-lg">
              Start Free Trial
            </Button>
          </motion.div>

          <Button
            variant="secondary"
            size="large"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-900"
          >
            Schedule 5-Minute Demo
          </Button>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-success flex-shrink-0" strokeWidth={3} />
              <span className="text-caption text-gray-300">{signal}</span>
            </div>
          ))}
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="tel:5551234567"
            className="text-body text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Or call us: (555) 123-4567
          </a>
        </motion.div>
      </div>
    </Section>
  );
};
