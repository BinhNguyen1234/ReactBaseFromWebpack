import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "eval-source-map",
  plugins: [ 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin() 
  ],
  loader: {},
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [{ loader: "ts-loader" }],
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};
export default config;
