import { motion } from 'framer-motion';
import { Calendar, Zap, X, RotateCcw } from 'lucide-react';
import { Card, Section } from '../components';

interface GuaranteeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const GuaranteeCard = ({ icon, title, description, delay }: GuaranteeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="text-center h-full">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-900 mb-2">
          {title}
        </h3>
        <p className="text-body-small text-primary-600">
          {description}
        </p>
      </Card>
    </motion.div>
  );
};

export const RiskReversal = () => {
  return (
    <Section background="gray" id="guarantees">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900 text-center mb-16"
        >
          Try ClientFlow Risk-Free
        </motion.h2>

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GuaranteeCard
            icon={<Calendar className="w-12 h-12 text-accent" strokeWidth={2} />}
            title="14-Day Free Trial"
            description="Full access. No credit card required."
            delay={0.1}
          />
          <GuaranteeCard
            icon={<Zap className="w-12 h-12 text-accent" strokeWidth={2} />}
            title="5-Minute Setup"
            description="Not 5 days. Literally 5 minutes."
            delay={0.2}
          />
          <GuaranteeCard
            icon={<X className="w-12 h-12 text-accent" strokeWidth={2} />}
            title="Cancel Anytime"
            description="No contracts. No cancellation fees."
            delay={0.3}
          />
          <GuaranteeCard
            icon={<RotateCcw className="w-12 h-12 text-success" strokeWidth={2} />}
            title="30-Day Money Back"
            description="100% satisfaction guaranteed."
            delay={0.4}
          />
        </div>
      </div>
    </Section>
  );
};
