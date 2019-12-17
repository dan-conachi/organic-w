const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    resolveLoader: {
      modules: [path.join(__dirname, 'node_modules')]
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }]
    }
  };