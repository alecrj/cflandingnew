/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Deep navy
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          600: '#475569',
          900: '#0F172A',
        },
        accent: {
          DEFAULT: '#0066FF', // Electric blue
          hover: '#0052CC',
        },
        success: '#10B981', // Emerald
        warning: '#F59E0B', // Amber
        error: '#EF4444', // Red
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
        'hero': ['64px', { lineHeight: '1.5', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-mobile': ['40px', { lineHeight: '1.5', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section': ['48px', { lineHeight: '1.5', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section-mobile': ['32px', { lineHeight: '1.5', fontWeight: '700' }],
        'subsection': ['32px', { lineHeight: '1.5', fontWeight: '600' }],
        'subsection-mobile': ['24px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-large': ['20px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-small': ['16px', { lineHeight: '1.7', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'lift': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'lift-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
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
