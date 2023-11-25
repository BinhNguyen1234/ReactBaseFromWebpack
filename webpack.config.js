import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpack from "webpack";
import Dotenv from "dotenv-webpack";
import TerserPlugin from "terser-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(process.env);
const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin()
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
  optimization: {
    nodeEnv: "production",
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            dead_code: true,
            // drop_console: true,
            drop_debugger: true,
          },
        },
      }),
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

export default config;
