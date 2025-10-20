import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gradient-purple' | 'gradient-blue' | 'gradient-pink' | 'gradient-mesh' | 'dark';
  id?: string;
  fullWidth?: boolean;
}

export const Section = ({
  children,
  className = '',
  background = 'white',
  id,
  fullWidth = false
}: SectionProps) => {
  const backgroundStyles = {
    white: 'bg-white',
    'gradient-purple': 'bg-purple-gradient',
    'gradient-blue': 'bg-blue-gradient',
    'gradient-pink': 'bg-pink-gradient',
    'gradient-mesh': 'bg-mesh-gradient bg-dark',
    dark: 'bg-dark text-white'
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 px-4 md:px-8 ${backgroundStyles[background]} ${className} relative overflow-hidden`}
    >
      <div className={fullWidth ? "w-full" : "max-w-7xl mx-auto"}>
        {children}
      </div>
    </section>
  );
};
