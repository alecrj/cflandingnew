import { motion } from 'framer-motion';
import { Phone, Play, Pause } from 'lucide-react';
import { Button, Card, Section } from '../components';
import { useState } from 'react';

interface AudioPlayerProps {
  title: string;
  duration: string;
  audioSrc?: string;
}

const AudioPlayer = ({ title, duration }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control actual audio playback
  };

  return (
    <Card hover className="p-6 bg-white/90 backdrop-blur-sm">
      <h4 className="font-bold text-gray-900 mb-4 text-left">{title}</h4>
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-accent-pink to-accent-orange text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
        </motion.button>
        <div className="flex-1">
          <div className="relative h-2.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent-pink to-accent-orange"
              initial={{ width: '0%' }}
              animate={{ width: isPlaying ? '100%' : `${progress}%` }}
              transition={{ duration: isPlaying ? 45 : 0, ease: 'linear' }}
              onAnimationComplete={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                  setProgress(0);
                }
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600 font-medium">
            <span>0:00</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const LiveDemo = () => {
  return (
    <Section background="gradient-blue" id="demo">
      <div className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-section-mobile md:text-section text-white mb-6"
        >
          Hear ClientFlow in Action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-body-large text-white/80 max-w-3xl mx-auto mb-16"
        >
          Experience the AI that's revolutionizing HVAC customer service
        </motion.p>

        {/* Demo Phone Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent-cyan/30 rounded-3xl blur-3xl" />

            <Card variant="highlighted" padding="large" hover={false} className="relative bg-white/95 backdrop-blur-xl">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Phone className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              </motion.div>

              <a
                href="tel:5551234822"
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent hover:from-secondary-600 hover:to-primary-600 transition-all block mb-4"
              >
                (555) 123-HVAC
              </a>

              <p className="text-body-large text-gray-700 mb-8 font-medium">
                Call now to talk with our AI receptionist
              </p>

              <Button size="large" href="tel:5551234822">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>

              <p className="text-sm text-gray-500 mt-6">
                Available 24/7 • Answers in under 2 seconds
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Audio Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-subsection-mobile md:text-subsection text-white mb-12">
            Or listen to real conversations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AudioPlayer
              title="Emergency Call: No Heat at 2 AM"
              duration="0:45"
            />
            <AudioPlayer
              title="Quote Request: AC Replacement"
              duration="0:52"
            />
            <AudioPlayer
              title="Appointment Booking: Maintenance"
              duration="0:38"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
