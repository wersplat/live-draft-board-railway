/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legends Basketball Association Theme: Purple/Red/Blue
        legends: {
          purple: {
            50: '#F3E8FF',
            100: '#E9D5FF',
            200: '#D8B4FE',
            300: '#C084FC',
            400: '#A855F7',
            500: '#9333EA', // Primary brand color
            600: '#7E22CE',
            700: '#6B21A8',
            800: '#581C87',
            900: '#4C1D95',
          },
          red: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
            600: '#DC2626', // Secondary/accent color
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
          },
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB', // Tertiary color
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
          },
        },
        // Legacy support
        primary: {
          DEFAULT: '#9333EA', // Purple primary
          dark: '#7E22CE',
        },
        secondary: {
          DEFAULT: '#DC2626', // Red secondary
          dark: '#B91C1C',
        },
      },
    },
  },
  plugins: [],
}
