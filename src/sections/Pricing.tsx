import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Check, Star, Sparkles } from 'lucide-react';
import { Button, Section } from '../components';
import { useState } from 'react';

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
  gradient: string;
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
  delay,
  gradient
}: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative perspective-1000"
      style={{ perspective: 1000 }}
    >
      {/* Pulsing glow for highlighted card */}
      {highlighted && (
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className={`absolute inset-0 ${gradient} rounded-3xl blur-3xl -z-10`}
        />
      )}

      <motion.div
        onMouseMove={handleMouse}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className={`relative h-full ${highlighted ? 'md:scale-105' : ''}`}
      >
        <div className={`relative bg-white rounded-3xl p-8 md:p-10 h-full flex flex-col border-2 ${highlighted ? 'border-primary-400' : 'border-gray-100'} shadow-2xl hover:shadow-3xl transition-shadow`}>
          {/* Badge */}
          {highlighted && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: delay + 0.3 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
            >
              <div className={`${gradient} text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg`}>
                <Sparkles className="w-4 h-4" />
                MOST POPULAR
              </div>
            </motion.div>
          )}

          {/* Plan Name */}
          <div className="text-center mb-6 pt-2">
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
              {name}
            </h3>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <motion.div
              animate={isHovered && highlighted ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
              className={`text-6xl md:text-7xl font-black mb-2 ${highlighted ? `bg-gradient-to-r ${gradient.replace('bg-gradient-to-br', 'from-primary-600 via-secondary-600 to-accent-pink')} bg-clip-text text-transparent` : 'text-gray-900'}`}
            >
              {price}
            </motion.div>
            <span className="text-lg font-semibold text-gray-500">/month</span>
          </div>

          {/* Description */}
          <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-2xl p-6 mb-8">
            <p className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
              Perfect for:
            </p>
            <p className="text-gray-700 font-medium mb-4">
              {description}
            </p>

            <p className="text-lg font-bold text-gray-900 mb-1">
              {volume}
            </p>
            <p className="text-sm text-gray-600 font-medium">
              {volumeDescription}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8 flex-grow">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full ${highlighted ? gradient : 'bg-gradient-to-br from-accent-lime to-accent-cyan'} flex items-center justify-center`}>
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            variant={highlighted ? 'primary' : 'secondary'}
            size="large"
            className="w-full"
          >
            {ctaText}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Pricing = () => {
  return (
    <Section background="gradient-mesh" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-section-mobile md:text-section text-white mb-6">
            Simple, Transparent
            <span className="block mt-2 bg-gradient-to-r from-accent-cyan via-accent-lime to-accent-orange bg-clip-text text-transparent">
              Pricing That Grows With You
            </span>
          </h2>
          <p className="text-body-large text-white/80 max-w-2xl mx-auto">
            Choose the plan that fits your call volume. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-16">
          <PricingCard
            name="STARTER"
            price="$699"
            description="Solo operators & small teams testing the waters"
            volume="1,500 minutes/mo"
            volumeDescription="Approximately 15 calls per day"
            features={[
              'AI Receptionist 24/7',
              'Appointment Booking',
              'Google Calendar Sync',
              'Customer CRM',
              'Call Logs & History',
              '1 User Account'
            ]}
            gradient="bg-gradient-to-br from-primary-500 to-primary-700"
            ctaText="Start Free Trial"
            delay={0.1}
          />

          <PricingCard
            name="PROFESSIONAL"
            price="$1,299"
            description="Growing businesses with consistent call volume"
            volume="3,500 minutes/mo"
            volumeDescription="Approximately 35 calls per day"
            features={[
              'Everything in Starter',
              'SMS Notifications',
              'Call Recording & Transcripts',
              '3 User Accounts',
              'Priority Support',
              'Custom Voice Training'
            ]}
            gradient="bg-gradient-to-br from-secondary-500 via-accent-pink to-accent-orange"
            highlighted
            ctaText="Start Free Trial"
            delay={0.2}
          />

          <PricingCard
            name="PREMIUM"
            price="$2,199"
            description="High-volume operations & multi-location businesses"
            volume="9,000 minutes/mo"
            volumeDescription="Approximately 90 calls per day"
            features={[
              'Everything in Professional',
              '3x Call Volume',
              'Multi-location Support',
              'Unlimited User Accounts',
              'Dedicated Phone Support',
              'White-glove Onboarding'
            ]}
            gradient="bg-gradient-to-br from-accent-cyan to-primary-600"
            ctaText="Contact Sales"
            delay={0.3}
          />
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
            <Check className="w-5 h-5 text-accent-lime" strokeWidth={3} />
            <span className="text-white font-semibold">14-day free trial</span>
            <span className="text-white/50">•</span>
            <span className="text-white font-semibold">No credit card</span>
            <span className="text-white/50">•</span>
            <span className="text-white font-semibold">Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
