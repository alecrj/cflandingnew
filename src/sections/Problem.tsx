import { motion } from 'framer-motion';
import { PhoneOff, Clock, TrendingDown, Users } from 'lucide-react';
import { Card, Section } from '../components';

interface ProblemStatProps {
  icon: React.ReactNode;
  stat: string;
  description: string;
  delay: number;
}

const ProblemStat = ({ icon, stat, description, delay }: ProblemStatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card variant="danger" className="text-center h-full">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <div className="text-3xl md:text-4xl font-bold text-error mb-2">
          {stat}
        </div>
        <p className="text-body text-primary-900">
          {description}
        </p>
      </Card>
    </motion.div>
  );
};

export const Problem = () => {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900 text-center mb-16 md:mb-20"
        >
          You're Losing Money Every Single Day
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ProblemStat
            icon={<PhoneOff className="w-12 h-12 text-error" strokeWidth={2} />}
            stat="40% of Calls"
            description="Happen after 5 PM"
            delay={0.1}
          />
          <ProblemStat
            icon={<Clock className="w-12 h-12 text-error" strokeWidth={2} />}
            stat="Those Calls"
            description="Go to voicemail"
            delay={0.2}
          />
          <ProblemStat
            icon={<TrendingDown className="w-12 h-12 text-error" strokeWidth={2} />}
            stat="$50,000+"
            description="Lost revenue annually"
            delay={0.3}
          />
          <ProblemStat
            icon={<Users className="w-12 h-12 text-error" strokeWidth={2} />}
            stat="Customers Call"
            description="Your competitor instead"
            delay={0.4}
          />
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-body-large text-primary-600 text-center italic max-w-3xl mx-auto"
        >
          Meanwhile, you're paying $45,000/year for a receptionist who only works 8 hours a day
        </motion.p>
      </div>
    </Section>
  );
};
