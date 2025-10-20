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
  const baseStyles = "font-semibold rounded-xl transition-all duration-300 ease-smooth inline-flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    default: "px-6 py-3.5 text-[15px] min-h-[48px]",
    large: "px-8 py-4 text-base min-h-[56px] md:px-10 md:py-5"
  };

  const variantStyles = {
    primary: "bg-accent-500 text-white shadow-sm hover:bg-accent-600 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm",
    secondary: "bg-white border border-primary-200 text-primary-900 shadow-sm hover:bg-primary-50 hover:border-primary-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
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
