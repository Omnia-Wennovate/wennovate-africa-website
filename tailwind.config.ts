import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury brand palette inspired by WENNOVATE logo
        'navy': '#0F1116', // Deep navy primary
        'emerald': '#10B981', // Vibrant emerald green
        'sapphire': '#0066CC', // Royal blue
        'gold': '#FCD34D', // Golden yellow
        'crimson': '#DC2626', // Crimson red
        
        // Neutral palette for luxury feel
        'slate-50': '#F9FAFB',
        'slate-100': '#F3F4F6',
        'slate-200': '#E5E7EB',
        'slate-300': '#D1D5DB',
        'slate-400': '#9CA3AF',
        'slate-500': '#6B7280',
        'slate-600': '#4B5563',
        'slate-700': '#374151',
        'slate-800': '#1F2937',
        'slate-900': '#111827',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #0F1116 0%, #1F2937 100%)',
        'gradient-accent': 'linear-gradient(135deg, #10B981 0%, #0066CC 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'luxury-sm': '0 10px 30px rgba(0, 0, 0, 0.2)',
        'luxury-lg': '0 30px 80px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(16, 185, 129, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
