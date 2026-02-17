/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/app/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#6F2DBD',
          light: '#A663CC',
          dark: '#5A2399',
        },
        navy: {
          dark: '#171123',
        },
        white: {
          off: '#FBFBFB',
        },
        text: {
          primary: '#171123',
          secondary: '#4A4458',
          tertiary: '#8B8696',
        },
        border: {
          light: '#E5E0EB',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        header: ['Times New Roman', 'Times', 'Georgia', 'serif'],
        serif: ['Times New Roman', 'Times', 'Georgia', 'serif'],
        display: ['Times New Roman', 'Times', 'Georgia', 'serif'],
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'blur-in': {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        'rotate-in-ccw': {
          '0%': { opacity: '0', transform: 'rotate(-8deg) scale(0.96)' },
          '100%': { opacity: '1', transform: 'rotate(0) scale(1)' },
        },
        typewriter: {
          '0%': { maxWidth: '0', overflow: 'hidden' },
          '100%': { maxWidth: '100%', overflow: 'visible' },
        },
        'color-cycle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
        'zoom-in': 'zoom-in 0.3s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.3s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'blur-in': 'blur-in 0.4s ease-out forwards',
        'rotate-in-ccw': 'rotate-in-ccw 0.5s ease-out forwards',
        'typewriter': 'typewriter 1.2s steps(30) forwards',
        'color-cycle': 'color-cycle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}













