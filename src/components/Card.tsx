import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'default' | 'large' | 'none';
  variant?: 'default' | 'highlighted' | 'danger';
}

export const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'default',
  variant = 'default'
}: CardProps) => {
  const baseStyles = "bg-white rounded-3xl transition-all duration-300 backdrop-blur-sm";

  const paddingStyles = {
    none: '',
    default: 'p-8',
    large: 'p-12'
  };

  const variantStyles = {
    default: 'border border-primary-200/30 shadow-lg',
    highlighted: 'border-2 border-primary-400 shadow-xl bg-gradient-to-br from-white to-primary-50/30',
    danger: 'border border-error bg-error-light'
  };

  const hoverStyles = hover
    ? "hover:shadow-2xl hover:-translate-y-1 hover:border-primary-300/50"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${baseStyles} ${paddingStyles[padding]} ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};
