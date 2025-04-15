module.exports = {
    content: [
        "./src/**/*.{html,js,astro}",
    ],
    theme: {
      extend: {
        screens: {
          'tall': { 'raw': '(min-height: 600px)' },
          'short': { 'raw': '(max-height: 480px)' },
          // ... more height breakpoints
        },
      },
    },
    plugins: [],
}