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
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        accent: {
          DEFAULT: '#0066FF', // Electric blue
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#0066FF',
          600: '#0052CC',
          700: '#0047B3',
          hover: '#0052CC',
        },
        success: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          500: '#F59E0B',
        },
        error: {
          DEFAULT: '#EF4444',
          50: '#FEF2F2',
          500: '#EF4444',
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
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'lift': '0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 8px 16px -4px rgba(0, 0, 0, 0.03)',
        'lift-lg': '0 20px 40px -8px rgba(0, 0, 0, 0.12), 0 12px 24px -6px rgba(0, 0, 0, 0.05)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
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
