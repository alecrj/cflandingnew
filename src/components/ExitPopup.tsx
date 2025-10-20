import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { Button } from './Button';
import { useState, useEffect } from 'react';

export const ExitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Desktop: Mouse leave detection
    document.addEventListener('mouseleave', handleMouseLeave);

    // Mobile: Inactivity timer
    let inactivityTimer: ReturnType<typeof setTimeout>;
    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      if (!hasShown) {
        inactivityTimer = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
        }, 45000); // 45 seconds
      }
    };

    if (window.innerWidth < 768) {
      document.addEventListener('touchstart', resetTimer);
      document.addEventListener('scroll', resetTimer);
      resetTimer();
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchstart', resetTimer);
      document.removeEventListener('scroll', resetTimer);
      clearTimeout(inactivityTimer);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-12 max-w-md w-full relative shadow-lift-lg"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-primary-600 hover:text-primary-900 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                  <Phone className="w-12 h-12 text-accent" strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                Wait—Hear ClientFlow in Action First
              </h3>

              <p className="text-body text-primary-600 mb-8">
                Call <a href="tel:5551234822" className="text-accent font-semibold hover:underline">(555) 123-HVAC</a> right now to talk to our AI
              </p>

              <div className="space-y-4">
                <Button
                  size="large"
                  href="tel:5551234822"
                  className="w-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-primary-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-primary-500">or</span>
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent focus:outline-none transition-colors mb-3"
                  />
                  <Button variant="secondary" className="w-full">
                    Get Free Call Analysis
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
