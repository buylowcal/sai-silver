// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      // New Font Families for Heading and Body
      heading: ['"Playfair Display"', 'serif'],
      body: ['Roboto', 'sans-serif'],
      
      // Retain existing font families if needed
      sans: ["Open Sans", "sans-serif"],
      DejaVu: ["DejaVu Sans", "Arial", "sans-serif"],
    },
    extend: {
      translate: ['responsive', 'hover', 'focus', 'group-hover', 'motion-safe', 'motion-reduce'],
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      colors: {
        emerald: {
          // Customizing specific shades
          300:'#EAD7CD',
          400: '#2C3E50',
          500: '#2C3E50', // Example: Changing emerald-500
          600: '#333333', // Example: Changing emerald-600
          700: '#2C3E50',
          800: '#333333',
          // Add more custom shades as needed
        },
        // Primary Colors
        silver: '#C0C0C0',
        black: '#000000',
        white: '#FFFFFF',

        // Accent Colors
        'deep-charcoal': '#333333',
        'soft-blue': '#A0AEC0',
        'muted-teal': '#5A6E6F',

        // Secondary Colors
        'light-gray': '#D3D3D3',
      },

      // Extend animations and keyframes
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },

      // Extend height
      height: {
        header: "560px",
      },

      // Extend background images
      backgroundImage: {
        "page-header": "url('/page-header-bg.jpg')",
        "contact-header": "url('/page-header-bg-2.jpg')",
        subscribe: "url('/subscribe-bg.jpg')",
        "app-download": "url('/app-download.jpg')",
        cta: "url('/cta-bg.png')",
        "cta-1": "url('/cta/cta-bg-1.png')",
        "cta-2": "url('/cta/cta-bg-2.png')",
        "cta-3": "url('/cta/cta-bg-3.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
