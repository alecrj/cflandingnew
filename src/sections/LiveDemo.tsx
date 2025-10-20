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
    <Card hover className="p-6">
      <h4 className="font-semibold text-primary-900 mb-4">{title}</h4>
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center transition-all hover:scale-105"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <div className="flex-1">
          <div className="relative h-2 bg-primary-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-accent"
              initial={{ width: '0%' }}
              animate={{ width: isPlaying ? '100%' : `${progress}%` }}
              transition={{ duration: isPlaying ? 45 : 0 }}
              onAnimationComplete={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                  setProgress(0);
                }
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-caption text-primary-600">
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
    <Section background="gray" id="demo">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900"
        >
          Hear ClientFlow in Action
        </motion.h2>

        {/* Demo Phone Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16"
        >
          <Card variant="highlighted" padding="large" hover={false} className="max-w-2xl mx-auto">
            <Phone className="w-12 h-12 text-accent mx-auto mb-6" />
            <a
              href="tel:5551234822"
              className="text-4xl md:text-5xl font-bold text-primary-900 hover:text-accent transition-colors block mb-4"
            >
              (555) 123-HVAC
            </a>
            <p className="text-body text-primary-600 mb-6">
              Call now to talk to our AI receptionist
            </p>
            <Button size="large" href="tel:5551234822" className="w-full md:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </Card>
        </motion.div>

        {/* Audio Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24"
        >
          <h3 className="text-2xl md:text-subsection-mobile lg:text-subsection font-semibold text-primary-900 mb-8">
            Or listen to real conversations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
