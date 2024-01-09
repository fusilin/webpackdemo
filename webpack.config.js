const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 开发环境
  mode: "development",
  // 入口
  entry: {
    // index: "./src/index.js",
    // print: './src/print.js',
    // another: './src/another-module.js',
    index: {
      import: "./src/index.js",
    },
  },
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    host: "localhost",
    contentBase: "./dist",
  },
  // 生成index.html文件
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  // 生成的文件
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  // 支持文件规则
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve("./src/loader.js"),
          },
        ],
      },
    ],
  },
};
