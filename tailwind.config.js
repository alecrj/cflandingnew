/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stripe-inspired color system
        text: {
          primary: '#0A2540',      // Dark blue-gray (main text)
          secondary: '#425466',    // Medium gray (body text)
          tertiary: '#6B7C93',     // Light gray (captions)
        },
        brand: {
          purple: '#635BFF',       // Primary brand (like Stripe)
          'purple-dark': '#5851EA', // Hover state
          blue: '#0066FF',         // Secondary brand
          'blue-dark': '#0052CC',  // Hover state
        },
        bg: {
          primary: '#FFFFFF',      // Pure white
          secondary: '#FAFAFA',    // Very light gray
          tertiary: '#F6F9FC',     // Subtle blue-gray
        },
        border: {
          light: '#E3E8EF',        // Subtle gray border
          medium: '#CDD5DF',       // Medium gray border
          DEFAULT: '#E3E8EF',
        },
        success: {
          DEFAULT: '#00D924',      // Bright green
          dark: '#00B31D',
          light: '#E6F9EA',
        },
        warning: {
          DEFAULT: '#F5A623',
          dark: '#E09615',
          light: '#FEF6E7',
        },
        error: {
          DEFAULT: '#E02020',
          dark: '#C41C1C',
          light: '#FCEAEA',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        // Stripe-inspired typography
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-mobile': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section': ['56px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'section-mobile': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'subsection': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'subsection-mobile': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-large': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
      },
      boxShadow: {
        // Stripe-inspired subtle shadows
        'card': '0 1px 3px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'button': '0 1px 3px rgba(0, 0, 0, 0.12)',
        'sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'lg': '10px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
