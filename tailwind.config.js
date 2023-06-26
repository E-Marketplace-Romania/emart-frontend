/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'primary': '#27374D',
      'primary-light': '#3E4F6C',
      'secondary': '#526D82',
      'secondary-light': '#7F9AB1',
      'tertiary': '#9DB2BF',
      'quaternary': '#DDE6ED',
      'white': '#FFFFFF',
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')

    // Or with a custom prefix:
    // require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
