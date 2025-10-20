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
  const baseStyles = "font-semibold rounded-lg transition-colors duration-200 inline-flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    default: "px-6 py-3 text-[15px] h-12",
    large: "px-8 py-4 text-base h-14"
  };

  const variantStyles = {
    primary: "bg-brand-purple text-white shadow-button hover:bg-brand-purple-dark",
    secondary: "bg-white border border-brand-purple text-brand-purple hover:bg-bg-tertiary"
  };

  const buttonElement = (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
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
