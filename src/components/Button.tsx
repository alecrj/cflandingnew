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
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 ease-smooth inline-flex items-center justify-center cursor-pointer";

  const sizeStyles = {
    default: "px-8 py-4 text-body-small min-h-[56px]",
    large: "px-10 py-5 text-body min-h-[64px] md:text-lg"
  };

  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent-hover hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0"
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
