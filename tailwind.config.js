const { guessProductionMode } = require("@ngneat/tailwind");

// TODO: make sure aot is running in build mode
const mode = process.env.TAILWIND_MODE = guessProductionMode() ? 'aot' : 'jit';

module.exports = {
    prefix: '',
    mode: mode,
    purge: {
      enabled: true,
      content: [
        './apps/**/*.{html,ts,css,scss,sass,less,styl}',
        './libs/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
