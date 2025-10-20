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
    white: 'bg-bg-primary',
    gray: 'bg-bg-secondary',
    dark: 'bg-text-primary text-white'
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 px-4 md:px-8 ${backgroundStyles[background]} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};
