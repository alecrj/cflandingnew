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
  const baseStyles = "bg-white border rounded-xl transition-all duration-300 ease-smooth";

  const paddingStyles = {
    none: '',
    default: 'p-8',
    large: 'p-12 md:p-16'
  };

  const variantStyles = {
    default: 'border-primary-200 shadow-subtle',
    highlighted: 'border-2 border-accent shadow-lift',
    danger: 'border-error/20 bg-error/5'
  };

  const hoverStyles = hover
    ? "hover:shadow-lift-lg hover:-translate-y-1"
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
