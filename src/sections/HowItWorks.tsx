import { motion } from 'framer-motion';
import { UserPlus, PhoneForwarded, Zap } from 'lucide-react';
import { Button, Card, Section } from '../components';

interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  delay: number;
}

const StepCard = ({ number, icon, title, description, time, delay }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <Card padding="large" className="h-full">
        {/* Number Badge */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold shadow-lift">
            {number}
          </div>
        </div>

        <div className="pt-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-accent/10 rounded-xl">
              {icon}
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-primary-900 mb-3">
            {title}
          </h3>

          <p className="text-body text-primary-600 mb-4">
            {description}
          </p>

          <p className="text-sm font-medium text-accent">
            {time}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export const HowItWorks = () => {
  return (
    <Section background="gray" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900 mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-body-large text-primary-600">
            Takes 10 Minutes
          </p>
        </motion.div>

        {/* Steps Grid with connecting line */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-0.5 bg-accent/30 mt-20"
               style={{
                 width: 'calc(100% - 200px)',
                 marginLeft: '100px'
               }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-8">
            <StepCard
              number="1"
              icon={<UserPlus className="w-10 h-10 text-accent" strokeWidth={2} />}
              title="Sign Up"
              description="Tell us about your business and services"
              time="5 minutes"
              delay={0.1}
            />
            <StepCard
              number="2"
              icon={<PhoneForwarded className="w-10 h-10 text-accent" strokeWidth={2} />}
              title="Forward Calls"
              description="We give you a number, you forward to it"
              time="2 minutes"
              delay={0.3}
            />
            <StepCard
              number="3"
              icon={<Zap className="w-10 h-10 text-accent" strokeWidth={2} />}
              title="Go Live"
              description="AI starts answering immediately"
              time="Instant"
              delay={0.5}
            />
          </div>
        </div>

        {/* Bottom Statement & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-body text-primary-600 italic mb-8">
            No technical setup. No installation. Just works out of the box.
          </p>
          <Button size="large" className="mb-3">
            Start Your Free 14-Day Trial
          </Button>
          <p className="text-caption text-primary-500">
            No Credit Card Required
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
