import { motion } from 'framer-motion';
import { Phone, Calendar, MessageSquare, Users, BarChart3, Target } from 'lucide-react';
import { Section } from '../components';
import { useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
  delay: number;
  gradient: string;
  accentColor: string;
}

const FeatureCard = ({ icon, title, features, delay, gradient, accentColor }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="relative h-full"
      >
        {/* Glow effect on hover */}
        <motion.div
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          className={`absolute inset-0 ${gradient} rounded-3xl blur-2xl -z-10`}
        />

        <div className="relative bg-white rounded-3xl p-8 h-full border-2 border-gray-100 hover:border-primary-200 transition-colors shadow-lg hover:shadow-2xl">
          {/* Icon with gradient background */}
          <motion.div
            animate={{ rotate: isHovered ? [0, -5, 5, 0] : 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex p-4 rounded-2xl mb-6 ${gradient}`}
          >
            <div className="w-8 h-8 text-white">
              {icon}
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {title}
          </h3>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.05 }}
                className="flex items-start text-gray-700"
              >
                <span className={`mr-3 mt-1 w-1.5 h-1.5 rounded-full ${accentColor} flex-shrink-0`} />
                <span className="font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Features = () => {
  const features = [
    {
      icon: <Phone className="w-8 h-8" strokeWidth={2.5} />,
      title: 'AI Phone System',
      gradient: 'bg-gradient-to-br from-accent-pink to-accent-orange',
      accentColor: 'bg-accent-pink',
      features: [
        'Answers 24/7, never miss a call',
        'Natural conversation flow',
        'Handles multiple calls simultaneously',
        'Records & transcribes every call'
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" strokeWidth={2.5} />,
      title: 'Smart Calendar',
      gradient: 'bg-gradient-to-br from-primary-600 to-secondary-600',
      accentColor: 'bg-primary-600',
      features: [
        'Google Calendar sync in real-time',
        'Shows actual availability',
        'Books appointments instantly',
        'Prevents double-bookings'
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" strokeWidth={2.5} />,
      title: 'SMS Notifications',
      gradient: 'bg-gradient-to-br from-accent-cyan to-primary-500',
      accentColor: 'bg-accent-cyan',
      features: [
        'Instant booking confirmations',
        'Automated 24-hour reminders',
        'Reduces no-shows by 40%',
        'Customizable message templates'
      ]
    },
    {
      icon: <Users className="w-8 h-8" strokeWidth={2.5} />,
      title: 'Customer Database',
      gradient: 'bg-gradient-to-br from-secondary-600 to-accent-pink',
      accentColor: 'bg-secondary-600',
      features: [
        'Complete call & service history',
        'Organized contact information',
        'Detailed service records',
        'Lightning-fast search'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" strokeWidth={2.5} />,
      title: 'Business Dashboard',
      gradient: 'bg-gradient-to-br from-accent-lime to-accent-cyan',
      accentColor: 'bg-accent-lime',
      features: [
        'Real-time call monitoring',
        'Today\'s appointment overview',
        'Customer behavior analytics',
        'Full call transcripts & insights'
      ]
    },
    {
      icon: <Target className="w-8 h-8" strokeWidth={2.5} />,
      title: 'Lead Tracking',
      gradient: 'bg-gradient-to-br from-accent-orange to-accent-pink',
      accentColor: 'bg-accent-orange',
      features: [
        'Captures every inquiry automatically',
        'Smart follow-up reminders',
        'Conversion rate tracking',
        'Never lose another lead'
      ]
    }
  ];

  return (
    <Section background="white" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-section-mobile md:text-section text-gray-900 mb-6">
            Everything You Need,
            <span className="block mt-2 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-pink bg-clip-text text-transparent">
              All in One Place
            </span>
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            A complete HVAC business automation platform designed for growth
          </p>
        </motion.div>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              features={feature.features}
              gradient={feature.gradient}
              accentColor={feature.accentColor}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-50 to-secondary-50 px-8 py-4 rounded-full border-2 border-primary-200">
            <span className="text-lg font-bold text-gray-900">Plus:</span>
            <span className="text-gray-700">Priority Support • Call Analytics • Voice Customization • Regular Updates</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
