/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Premium Typography Scale - Dropbox-inspired
      fontSize: {
        'display': ['80px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],  // Hero headlines
        'heading': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],   // Section headings
        'subheading': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }], // Subheadings
        'body': ['20px', { lineHeight: '1.6', fontWeight: '400' }],                                 // Body text, labels
        'small': ['16px', { lineHeight: '1.5', fontWeight: '400' }],                                // Small text, captions
      },
      // Vibrant Color Palette - Dropbox inspired
      colors: {
        'pure-black': '#000000',
        'pure-white': '#FFFFFF',
        'gray': '#888888',
        'electric-blue': '#0061FF',
        'vibrant-orange': '#FF6B35',
        'bright-pink': '#FF006B',
        'lime-green': '#00E676',
        'sunny-yellow': '#FFD600',
        'deep-purple': '#7C3AED',
      },
      // Premium Spacing Scale - Much more generous
      spacing: {
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
        '8': '64px',
        '12': '96px',   // Large section spacing
        '16': '128px',  // Extra large section spacing
        '20': '160px',  // Hero section spacing
      },
    },
  },
  plugins: [],
}
