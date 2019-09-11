import { Configuration } from 'webpack'
import * as path from 'path'

const config: Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}

export default config
