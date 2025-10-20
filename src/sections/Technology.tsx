import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Section } from '../components';

const Column = ({ title, items, delay }: { title: string; items: string[]; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-xl font-semibold text-primary-900 mb-6">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
            <span className="text-body-small text-primary-600">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Technology = () => {
  const integrations = [
    'ServiceTitan',
    'Housecall Pro',
    'Jobber',
    'QuickBooks',
    'Google Calendar',
    'Salesforce',
    'Zapier'
  ];

  return (
    <Section background="gray" id="technology">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900 text-center mb-16"
        >
          Enterprise Technology. Purpose-Built for HVAC.
        </motion.h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <Column
            title="Technology"
            items={[
              'GPT-4 powered natural language',
              '99.99% uptime SLA',
              'Sub-500ms response latency',
              'Bank-level encryption (AES-256)',
              'Secure US-based infrastructure'
            ]}
            delay={0.1}
          />
          <Column
            title="HVAC-Specific"
            items={[
              'Trained on real HVAC service calls',
              'Understands industry terminology (SEER, BTU, tonnage)',
              'Emergency detection and routing',
              'Seasonal demand handling',
              'ServiceTitan + Housecall Pro certified'
            ]}
            delay={0.2}
          />
          <Column
            title="Built for Scale"
            items={[
              'Unlimited concurrent calls',
              'No busy signals, ever',
              '24/7/365 availability',
              'Automatic CRM syncing',
              'Works with any phone system'
            ]}
            delay={0.3}
          />
        </div>

        {/* Integration Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-primary-900 mb-8">
            Integrates With Your Tools
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="flex items-center justify-center"
              >
                <div className="px-4 py-3 bg-white rounded-lg border border-primary-200 hover:border-accent hover:shadow-subtle transition-all cursor-pointer">
                  <p className="text-sm font-medium text-primary-600 hover:text-accent transition-colors whitespace-nowrap">
                    {integration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-primary-500 mt-6">
            + 9,000 more apps via Zapier
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
