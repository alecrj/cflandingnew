import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button, Card, Section } from '../components';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  volume: string;
  volumeDescription: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  delay: number;
}

const PricingCard = ({
  name,
  price,
  description,
  volume,
  volumeDescription,
  features,
  highlighted = false,
  ctaText,
  delay
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <Card
        variant={highlighted ? 'highlighted' : 'default'}
        padding="large"
        hover={!highlighted}
        className={`h-full flex flex-col ${highlighted ? 'scale-105 md:scale-110' : ''}`}
      >
        {highlighted && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="bg-accent-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-current" />
              MOST POPULAR
            </div>
          </div>
        )}

        <div className="text-center mb-6 pt-2">
          <h3 className="text-2xl font-bold text-primary-900 mb-2">
            {name}
          </h3>
        </div>

        <div className="text-center mb-6">
          <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            {price}
            <span className="text-lg font-normal text-primary-600">/mo</span>
          </div>
        </div>

        <div className="border-t border-primary-200 pt-6 mb-6">
          <p className="text-sm font-semibold text-primary-900 mb-1">
            Perfect for:
          </p>
          <p className="text-body-small text-primary-600 mb-4">
            {description}
          </p>

          <p className="text-body font-semibold text-primary-900 mb-1">
            {volume}
          </p>
          <p className="text-sm text-primary-500">
            {volumeDescription}
          </p>
        </div>

        <div className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-body-small text-primary-900">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button
          variant={highlighted ? 'primary' : 'secondary'}
          size="large"
          className="w-full"
        >
          {ctaText}
        </Button>
      </Card>
    </motion.div>
  );
};

export const Pricing = () => {
  return (
    <Section background="gray" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-body text-primary-600">
            Based on your monthly call volume
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <PricingCard
            name="STARTER"
            price="$699"
            description="Solo operators • Testing it out"
            volume="1,500 minutes/mo"
            volumeDescription="(~15 calls/day)"
            features={[
              'AI Receptionist',
              '24/7 Coverage',
              'Books Appointments',
              'Google Calendar',
              'Customer CRM',
              'Call Logs',
              '1 User Login'
            ]}
            ctaText="Start Trial"
            delay={0.1}
          />

          <PricingCard
            name="PROFESSIONAL"
            price="$1,299"
            description="Small businesses • 1-5 employees"
            volume="3,500 minutes/mo"
            volumeDescription="(~35 calls/day)"
            features={[
              'Everything in Starter, PLUS:',
              'SMS Alerts',
              'Call Recording',
              '3 User Logins',
              'Priority Support'
            ]}
            highlighted
            ctaText="Start Trial"
            delay={0.2}
          />

          <PricingCard
            name="PREMIUM"
            price="$2,199"
            description="High volume • Multi-location"
            volume="9,000 minutes/mo"
            volumeDescription="(~90 calls/day)"
            features={[
              'Everything in Professional, PLUS:',
              '3x Volume',
              'Multi-location',
              'Unlimited Users',
              'Phone Support',
              'Dedicated Setup'
            ]}
            ctaText="Contact Sales"
            delay={0.3}
          />
        </div>

        {/* Bottom Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-body text-primary-600 text-center"
        >
          All plans include 14-day free trial • No setup fees • No contracts • Cancel anytime
        </motion.p>
      </div>
    </Section>
  );
};
