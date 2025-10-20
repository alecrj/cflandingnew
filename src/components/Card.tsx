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
  const baseStyles = "bg-bg-primary rounded-xl transition-all duration-200";

  const paddingStyles = {
    none: '',
    default: 'p-8',
    large: 'p-12'
  };

  const variantStyles = {
    default: 'border border-border-light shadow-card',
    highlighted: 'border-2 border-brand-purple shadow-card',
    danger: 'border border-error-light bg-error-light'
  };

  const hoverStyles = hover
    ? "hover:shadow-card-hover"
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
