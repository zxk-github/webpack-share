let path = require('path');

module.exports = {
  entry : './entry.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  }
}