const path = require('node:path');

const webpackConfig = {
  mode: 'development',
  target: ['web', 'browserslist'],
  devServer: {
    port: 3000,
    client: {
      overlay: true
    }
  },
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './public'), 
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  'runtime': 'automatic'
                }
              ],
            ]
          }
        }
      }
    ]
  }
};

module.exports = webpackConfig;