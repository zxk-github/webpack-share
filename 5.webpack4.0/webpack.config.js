let path = require('path');

module.exports = {
  mode: 'development',

  entry : './entry.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  }
}