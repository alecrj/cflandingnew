import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button, Card, Section } from '../components';
import { useState, useEffect } from 'react';

const AnimatedNumber = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.8,
      ease: 'easeOut'
    });

    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, motionValue, rounded]);

  return <>{displayValue.toLocaleString()}</>;
};

export const ROICalculator = () => {
  const [receptionistCost, setReceptionistCost] = useState(45000);
  const [missedCalls, setMissedCalls] = useState(10);
  const [avgJobValue, setAvgJobValue] = useState(500);

  const clientFlowCost = 15588; // $1,299/mo × 12
  const savings = receptionistCost - clientFlowCost;
  const capturedRevenue = missedCalls * 52 * avgJobValue;
  const totalBenefit = savings + capturedRevenue;
  const roi = ((totalBenefit / clientFlowCost) * 100).toFixed(0);

  return (
    <Section background="white" id="roi-calculator">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900 text-center mb-16"
        >
          Calculate Your ROI
        </motion.h2>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card padding="large" hover={false} className="max-w-3xl mx-auto">
            {/* Input 1: Receptionist Cost */}
            <div className="mb-8">
              <label className="block text-body font-semibold text-primary-900 mb-4">
                Your receptionist costs:
              </label>
              <select
                value={receptionistCost}
                onChange={(e) => setReceptionistCost(Number(e.target.value))}
                className="w-full p-4 border-2 border-primary-200 rounded-lg text-body font-medium text-primary-900 focus:border-accent focus:outline-none transition-colors"
              >
                <option value={30000}>$30,000/year</option>
                <option value={35000}>$35,000/year</option>
                <option value={40000}>$40,000/year</option>
                <option value={45000}>$45,000/year</option>
                <option value={50000}>$50,000/year</option>
                <option value={55000}>$55,000/year</option>
                <option value={60000}>$60,000/year</option>
              </select>
            </div>

            {/* Input 2: ClientFlow Cost (Display Only) */}
            <div className="mb-8">
              <label className="block text-body font-semibold text-primary-900 mb-4">
                ClientFlow costs:
              </label>
              <div className="w-full p-4 bg-success/5 border-2 border-success rounded-lg">
                <p className="text-2xl font-bold text-success">
                  ${clientFlowCost.toLocaleString()}/year
                </p>
                <p className="text-sm text-primary-600 mt-1">
                  ($1,299/mo × 12)
                </p>
              </div>
            </div>

            {/* Output 1: Savings */}
            <div className="mb-8 p-6 bg-success-50/50 rounded-2xl border border-success-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-success-600" strokeWidth={2.5} />
                <p className="text-base font-semibold text-primary-900">
                  YOUR SAVINGS:
                </p>
              </div>
              <p className="text-4xl font-bold text-success-600">
                $<AnimatedNumber value={savings} />/year
              </p>
            </div>

            <div className="border-t-2 border-primary-200 my-8" />

            {/* Input 3: Missed Calls */}
            <div className="mb-6">
              <label className="block text-body font-semibold text-primary-900 mb-4">
                Calls you miss after hours: <span className="text-accent">{missedCalls} per week</span>
              </label>
              <input
                type="range"
                min="5"
                max="50"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-sm text-primary-500 mt-2">
                <span>5</span>
                <span>50</span>
              </div>
            </div>

            {/* Input 4: Average Job Value */}
            <div className="mb-8">
              <label className="block text-body font-semibold text-primary-900 mb-4">
                Average job value:
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-primary-900">
                  $
                </span>
                <input
                  type="number"
                  min="100"
                  max="10000"
                  step="50"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-4 border-2 border-primary-200 rounded-lg text-xl font-medium text-primary-900 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Output 2: Captured Revenue */}
            <div className="mb-8 p-6 bg-success-50/50 rounded-2xl border border-success-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-success-600" strokeWidth={2.5} />
                <p className="text-base font-semibold text-primary-900">
                  CAPTURED REVENUE:
                </p>
              </div>
              <p className="text-4xl font-bold text-success-600">
                $<AnimatedNumber value={capturedRevenue} />/year
              </p>
              <p className="text-sm text-primary-500 mt-2">
                ({missedCalls} calls × 52 weeks × ${avgJobValue})
              </p>
            </div>

            <div className="border-t border-primary-200/60 my-8" />

            {/* Final Output: Total Benefit */}
            <div className="mb-6 p-8 bg-gradient-to-br from-accent-50 to-accent-100/50 rounded-2xl border border-accent-500/30 shadow-sm">
              <p className="text-lg font-semibold text-primary-900 mb-2">
                TOTAL ANNUAL BENEFIT:
              </p>
              <p className="text-5xl md:text-6xl font-bold text-accent-600 mb-4">
                $<AnimatedNumber value={totalBenefit} />
              </p>
              <div className="flex items-center gap-4">
                <p className="text-xl font-bold text-primary-900">
                  Your ROI: <span className="text-accent-600"><AnimatedNumber value={Number(roi)} />%</span>
                </p>
              </div>
            </div>

            {/* CTA */}
            <Button size="large" className="w-full mt-4">
              Start Capturing Revenue Now
            </Button>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
