import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button, Section } from '../components';

const benefits = [
  { benefit: 'Answers Every Call in 2 Rings', impact: '24/7/365' },
  { benefit: 'Sounds Completely Natural', impact: 'Customers Love It' },
  { benefit: 'Books Appointments Automatically', impact: 'Syncs to Calendar' },
  { benefit: 'Sends Confirmations & Reminders', impact: 'Reduces No-Shows' },
  { benefit: 'Captures Every Lead', impact: 'Never Misses One' },
  { benefit: 'Handles 100 Calls Simultaneously', impact: 'No Busy Signals' },
  { benefit: 'Costs 70% Less Than a Human', impact: '$1,299/month' },
];

export const Solution = () => {
  return (
    <Section background="white" id="solution">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900 mb-4">
            Meet ClientFlow
          </h2>
          <p className="text-xl md:text-2xl text-primary-600 font-normal">
            The AI Receptionist That Never Sleeps
          </p>
        </motion.div>

        {/* Product Screenshot Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-primary-200 shadow-lift-lg">
            <div className="bg-gradient-to-br from-accent/5 to-success/5 aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-primary-200">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-primary-600 font-medium">Dashboard Preview</p>
                  <p className="text-sm text-primary-500 mt-2">Call logs • Appointments • Live calls</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="space-y-4 max-w-4xl mx-auto mb-12">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <Check className="w-6 h-6 text-success flex-shrink-0" strokeWidth={3} />
                <span className="text-body font-semibold text-primary-900">
                  {item.benefit}
                </span>
              </div>
              <div className="text-body text-accent font-medium hidden md:block">
                {item.impact}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-body-large font-semibold text-accent mb-8">
            All without hiring, training, or managing another employee
          </p>
          <Button size="large">Start Free Trial Now</Button>
        </motion.div>
      </div>
    </Section>
  );
};
