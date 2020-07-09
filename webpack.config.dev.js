import path from 'path';

export default {
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  devtool: 'inline-source-map',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
}
