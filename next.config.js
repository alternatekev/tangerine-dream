const path = require('path');

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    config.resolve.alias['@td'] = path.resolve(__dirname);

    return config
  },
  cssModules: true
}
