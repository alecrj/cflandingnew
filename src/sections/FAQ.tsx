import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section } from '../components';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-primary-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-primary-50 transition-colors px-4 rounded-lg"
      >
        <span className="text-body font-semibold text-primary-900 pr-8">
          {question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-6 h-6 text-accent" strokeWidth={2} />
          ) : (
            <Plus className="w-6 h-6 text-accent" strokeWidth={2} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4 text-body text-primary-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Will my customers know it\'s AI?',
      answer: 'Most won\'t notice—it sounds completely natural. And honestly? They don\'t care. They just want their call answered. The AI understands HVAC terminology and speaks naturally. Customers rate conversations 4.9/5.'
    },
    {
      question: 'What if it makes a mistake?',
      answer: 'It will sometimes, just like humans. You see every call transcript and can review. The difference? It learns from mistakes and never makes the same one twice. Humans repeat mistakes forever.'
    },
    {
      question: 'How long does setup take?',
      answer: '10-15 minutes. We configure everything—you just forward your phone number to ours. That\'s it. No technical knowledge needed.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. No contracts, no commitments. Month-to-month. If it\'s not working, cancel with one click. No hard feelings.'
    },
    {
      question: 'What if a customer asks for a human?',
      answer: 'AI transfers calls instantly when requested. "Let me connect you with my manager"—transfers in 3 seconds to your phone with full call context.'
    },
    {
      question: 'How does it compare to a human receptionist?',
      answer: 'Pros: Works 24/7, costs 70% less, handles unlimited calls, never sick, never makes the same mistake twice. Cons: Can\'t handle truly complex situations (rare). Solution: Transfers to you automatically when needed.'
    },
    {
      question: 'What happens if I go over my minutes?',
      answer: 'We alert you at 80% usage. You can upgrade to the next tier, pay $0.50/min overage, or we auto-upgrade you (we\'ll notify). Most businesses never hit their limit.'
    },
    {
      question: 'Do I need any special equipment?',
      answer: 'Nope. Just forward your existing phone number. Works with any phone, any carrier, anywhere. No hardware, no installation.'
    },
    {
      question: 'What if I need help?',
      answer: 'Email support for all plans (4-hour response). Professional & Premium get priority support. We also have video tutorials and a knowledge base.'
    }
  ];

  return (
    <Section background="white" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-section-mobile lg:text-section font-bold text-primary-900 text-center mb-16"
        >
          Common Questions
        </motion.h2>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl border border-primary-200 overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
