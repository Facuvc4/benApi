/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      dropShadow: {
        'green-lg': '0 10px 8px rgba(5, 150, 105, 0.5)',
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        md: '4px 4px 6px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
