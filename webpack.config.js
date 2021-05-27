const path = require("path");
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 开发环境
  mode: 'development',
  // 入口
  entry: {
    index: "./src/index.js",
    // print: './src/print.js',
    // another: './src/another-module.js',
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // print: {
    //   import: './src/print',
    //   dependOn: 'shared',
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash',
  },
  // 暴露error、waring源代码位置
  devtool: 'inline-source-map',
  // 从dist查找文件. http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename] 进行访问。
  devServer: {
    port: 8888,
    contentBase: './dist',
  },
  // 生成index.html文件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  // 生成的文件
  output: {
    // publicPath: 'webpackdemo',
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // optimization: {
    // runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    // }
  // },
  // 支持文件规则
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
