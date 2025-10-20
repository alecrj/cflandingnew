/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // VIBRANT, PLAYFUL DROPBOX-INSPIRED COLORS
        primary: {
          DEFAULT: '#4F46E5', // Electric Indigo
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        secondary: {
          DEFAULT: '#7C3AED', // Vivid Purple
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
        },
        accent: {
          pink: '#EC4899',      // Hot Pink
          cyan: '#06B6D4',      // Bright Cyan
          orange: '#F59E0B',    // Vibrant Orange
          lime: '#84CC16',      // Fresh Lime
        },
        dark: {
          DEFAULT: '#0F172A',   // Deep Navy
          lighter: '#1E293B',
        },
        // Keep success/warning/error for semantic use
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
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
        // BOLD, DRAMATIC TYPOGRAPHY
        'hero': ['96px', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '900' }],
        'hero-mobile': ['56px', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '900' }],
        'section': ['64px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'section-mobile': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'subsection': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'subsection-mobile': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        'body-large': ['22px', { lineHeight: '1.7', fontWeight: '500' }],
        'body': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'caption': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      backgroundImage: {
        // VIBRANT GRADIENTS
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'purple-gradient': 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
        'blue-gradient': 'linear-gradient(135deg, #06B6D4 0%, #4F46E5 100%)',
        'pink-gradient': 'linear-gradient(135deg, #EC4899 0%, #7C3AED 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, #7C3AED 0px, transparent 50%), radial-gradient(at 80% 0%, #4F46E5 0px, transparent 50%), radial-gradient(at 0% 50%, #EC4899 0px, transparent 50%)',
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
