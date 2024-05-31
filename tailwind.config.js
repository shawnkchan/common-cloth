/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}"
  ],
  theme: {
    colors: {
      'primary': '#196C44',
      'cream': '#F2F0EC',
    },
    fontSize: {
      'nav-title': '48px',
      'nav-section': '28px',
      'blog-title': '24px',
      'blog-desc': '16px',
      'blog-tags': '12px',
    },
    extend: {},
  },
  plugins: [],
}

