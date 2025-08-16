/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* light-gray */
        input: "var(--color-input)", /* subtle-gray */
        ring: "var(--color-ring)", /* deep-blue */
        background: "var(--color-background)", /* near-white */
        foreground: "var(--color-foreground)", /* rich-charcoal */
        primary: {
          DEFAULT: "var(--color-primary)", /* deep-blue */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* sophisticated-slate */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* clear-red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* subtle-gray */
          foreground: "var(--color-muted-foreground)", /* medium-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* warm-orange */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* rich-charcoal */
        },
        card: {
          DEFAULT: "var(--color-card)", /* subtle-gray */
          foreground: "var(--color-card-foreground)", /* rich-charcoal */
        },
        success: {
          DEFAULT: "var(--color-success)", /* forest-green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* clear-red */
          foreground: "var(--color-error-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'floating': '0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        'micro': '150ms',
        'smooth': '300ms',
      },
      transitionTimingFunction: {
        'micro': 'ease-out',
        'smooth': 'ease-in-out',
      },
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 2vw, 1rem)',
        'fluid-sm': 'clamp(1rem, 3vw, 1.5rem)',
        'fluid-md': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-lg': 'clamp(2rem, 5vw, 3rem)',
        'fluid-xl': 'clamp(3rem, 6vw, 4rem)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}