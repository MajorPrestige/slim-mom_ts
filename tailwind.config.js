/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'mobile-only': { max: '479.98px' },
      mobile: '480px',
      'tablet-before': { max: '767.98px' },
      'mobile-tablet': { min: '480px', max: '767.98px' },
      'tablet-only': { min: '768px', max: '1279.98px' },
      tablet: { min: '768px' },
      desktop: { min: '1280px' },
      'not-desktop': { max: '1279.98px' },
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      link: '200% 100%',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'main-color': '#ffffff',
      'background-color': '#f0f1f3',
      'accent-color': '#fc842d',
      'text-color': '#212121',
      'second-text-color': '#9b9faa',
      'border-color': '#e0e0e0',
      'box-shadow': 'rgba(252, 132, 45, 0.5)',
    },
    extend: {
      fontFamily: {
        verdana: ['Verdana', 'Geneva', 'sans-serif'],
      },
      boxShadow: {
        'btn-shadow': '0px 4px 10px rgba(252, 132, 45, 0.5)',
      },
      outlineWidth: {
        w0: 0,
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },

      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-retina')],
};
