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
  const baseStyles = "bg-white border rounded-2xl transition-all duration-300 ease-smooth";

  const paddingStyles = {
    none: '',
    default: 'p-6 md:p-8',
    large: 'p-10 md:p-12'
  };

  const variantStyles = {
    default: 'border-primary-200/60 shadow-sm',
    highlighted: 'border-2 border-accent-500 shadow-md ring-4 ring-accent-50',
    danger: 'border-error-50 bg-error-50/50'
  };

  const hoverStyles = hover
    ? "hover:shadow-lift hover:-translate-y-0.5 hover:border-primary-300/60"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${baseStyles} ${paddingStyles[padding]} ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};
