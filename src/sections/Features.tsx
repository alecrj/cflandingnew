import { motion } from 'framer-motion';
import { Phone, Calendar, MessageSquare, Users, BarChart3, Target } from 'lucide-react';
import { Card, Section } from '../components';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
  delay: number;
}

const FeatureCard = ({ icon, title, features, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="h-full">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-900 mb-4">
          {title}
        </h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-body-small text-primary-600 flex items-start">
              <span className="mr-2 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
};

export const Features = () => {
  const features = [
    {
      icon: <Phone className="w-8 h-8 text-accent" strokeWidth={2} />,
      title: 'AI Phone System',
      features: [
        'Answers 24/7',
        'Natural conversation',
        'Multiple calls at once',
        'Call recording'
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent" strokeWidth={2} />,
      title: 'Smart Calendar',
      features: [
        'Google Calendar sync',
        'Real-time availability',
        'Automatic booking',
        'No double-bookings'
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent" strokeWidth={2} />,
      title: 'SMS Notifications',
      features: [
        'Instant confirmations',
        '24-hour reminders',
        'Reduces no-shows 40%',
        'Custom messages'
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-accent" strokeWidth={2} />,
      title: 'Customer Database',
      features: [
        'Complete history',
        'Contact info',
        'Service records',
        'Easy search'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" strokeWidth={2} />,
      title: 'Business Dashboard',
      features: [
        'See all calls',
        'Today\'s appointments',
        'Customer analytics',
        'Call transcripts'
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-accent" strokeWidth={2} />,
      title: 'Lead Tracking',
      features: [
        'Capture every inquiry',
        'Follow-up reminders',
        'Conversion tracking',
        'Never lose a lead'
      ]
    }
  ];

  return (
    <Section background="white" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900 text-center mb-16"
        >
          Everything You Need, Included
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              features={feature.features}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-body text-primary-600 text-center max-w-3xl mx-auto"
        >
          Plus: Priority Support, Call Analytics, Voice Customization, and Regular Updates
        </motion.p>
      </div>
    </Section>
  );
};
