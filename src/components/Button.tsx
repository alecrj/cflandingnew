import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseStyles = "font-bold rounded-2xl transition-all duration-300 inline-flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";

  const sizeStyles = {
    default: "px-8 py-4 text-base h-14",
    large: "px-10 py-5 text-lg h-16"
  };

  const variantStyles = {
    primary: "bg-purple-gradient text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white border-2 border-primary-500 text-primary-700 hover:bg-primary-50 shadow-md"
  };

  const buttonElement = (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {/* Gradient shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonElement}
      </a>
    );
  }

  return buttonElement;
};
