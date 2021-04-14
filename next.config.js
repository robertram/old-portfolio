const withImages = require('next-images');
module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'svg'],
  webpack(config, options) {
    return config;
  }
});

// next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withSass();
