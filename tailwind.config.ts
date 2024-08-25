import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        meetie: {
          blue: {
            1: 'hsl(var(--meetie-blue-1))',
            2: 'hsl(var(--meetie-blue-2))',
            3: 'hsl(var(--meetie-blue-3))',
            4: 'hsl(var(--meetie-blue-4))',
            5: 'hsl(var(--meetie-blue-5))',
          },
          gray: {
            20: 'hsl(var(--meetie-gray-20))',
            40: 'hsl(var(--meetie-gray-40))',
            60: 'hsl(var(--meetie-gray-60))',
            75: 'hsl(var(--meetie-gray-75))',
            90: 'hsl(var(--meetie-gray-90))',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      flex: {
        '2': '0 0 100%',
      },
    },
  },
} satisfies Config

export default config
