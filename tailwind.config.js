/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Feed & Seed — six locked brand tokens. No additions.
        manila: '#EFE4C7', // page bg / paper
        kraft: '#D9C9A1', // deeper bg / insets
        hunter: '#2D4A2B', // primary / brand green
        faded: '#9CAA8E', // muted secondary
        burlap: '#5A523C', // ink soft / secondary text
        ink: '#1A1A14', // text / contrast
      },
      fontFamily: {
        display: ['"Roboto Slab"', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans Condensed"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        // Feed & Seed labels/eyebrows run wide (0.22–0.3em in the source).
        widest2: '0.22em',
        widest3: '0.28em',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};
