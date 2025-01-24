/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        'echodash-blue': '#0A0079',
        'echodash-yellow': '#FAFF00',
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  // Only enable Tailwind on the homepage to avoid affecting docs/blog
  corePlugins: {
    preflight: false, // Disable Tailwind's reset
    components: true
  },
  // Prefix Tailwind classes to avoid conflicts
  prefix: 'tw-',
} 