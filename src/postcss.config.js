// postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),  // Use new plugin correctly with ()
    require('autoprefixer'),
  ],
};