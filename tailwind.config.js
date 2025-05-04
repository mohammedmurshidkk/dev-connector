/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': 'var(--background-primary)',
        'foreground-primary': 'var(--foreground-primary)',
        'airbnb-teal': '#008489',
        'airbnb-gray': '#e0e0e0',
        'airbnb-black': '#222',
        'airbnb-white': '#fff'
      },
      screens: {
        xxs: '320px', // Extra extra small devices (e.g., very small smartphones)
        xs: '480px', // Extra small devices (custom, e.g., older smartphones)
        sm: '640px', // Small devices (e.g., smartphones)
        md: '768px', // Medium devices (e.g., tablets)
        lg: '1024px', // Large devices (e.g., laptops)
        xl: '1280px', // Extra large devices (e.g., desktops)
        '2xl': '1536px' // Double extra large devices (e.g., large desktops)
      }
    }
  },
  plugins: []
};
