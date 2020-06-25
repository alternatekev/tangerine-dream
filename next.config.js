const path = require('path');
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    config.resolve.alias['@td'] = path.resolve(__dirname);

    return config
  },
  cssModules: true
})
