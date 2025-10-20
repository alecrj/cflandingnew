import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const StickyCTA = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 400], [0, 1]);
  const y = useTransform(scrollY, [300, 400], [100, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="bg-white/95 backdrop-blur-sm border-t border-primary-200 shadow-lift-lg p-4">
        <Button size="large" className="w-full">
          Try Free for 14 Days
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
};
