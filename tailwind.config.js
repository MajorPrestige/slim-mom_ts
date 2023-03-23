/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      14: '14px',
      16: '16px',
      xs: '0.75rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    lineHeight: {
      1.2: '1.2',
      1.4: '1.4',
      1.6: '1.6',
    },
    letterSpacing: {
      def: '0.04em',
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },
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
      'overlay': 'rgba(33, 33, 33, 0.12)',
      'modal': '#eff1f3',
    },
    extend: {
      fontFamily: {
        verdana: ['Verdana', 'Geneva', 'sans-serif'],
        gotham: ['GothamPro', 'sans-serif'],
      },
      boxShadow: {
        'btn-shadow': '0px 4px 10px rgba(252, 132, 45, 0.5)',
        'modal': '0px 22px 40px rgba(0, 0, 0, 0.1)'
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
