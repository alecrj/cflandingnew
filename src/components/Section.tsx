import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  id?: string;
}

export const Section = ({
  children,
  className = '',
  background = 'white',
  id
}: SectionProps) => {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gradient-to-b from-primary-50/30 to-primary-50/50',
    dark: 'bg-primary-900 text-white'
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 md:px-8 ${backgroundStyles[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
