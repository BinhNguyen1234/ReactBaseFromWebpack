import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import webpack from 'webpack'
import Dotenv from 'dotenv-webpack'
import 'webpack-dev-server'
const _fileName = fileURLToPath(import.meta.url)
const _dirName = path.dirname(_fileName)
const configCommon = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(_dirName, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(_dirName, 'index.html'),
            filename: 'index.html'
        }),
        new Dotenv(),
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: [{ loader: 'ts-loader' }],
                exclude: ['/node_modules/'],
                sideEffects: true
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }, 
    devServer: {
        static: {
            directory: path.join(_dirName, 'dist'),
            
        },
        historyApiFallback: true
    }
}

export default configCommon
