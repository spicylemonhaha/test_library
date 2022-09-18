/**
 * @type {Configuration}
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // entry: {
  //   // hello: './src/components/Hello/index.js',
  //   // helloTwo: './src/components/HelloTwo/index.js',
  //   index: './src/index.js',
  // },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: () => '[name].js',
    libraryTarget: 'umd', // 用到的模块定义规范
    library: 'myLib', // 库的名字
    libraryExport: 'default',
  },
  // externals: {
  //   vue: {
  //     root: 'Vue', // 通过 script 标签引入，此时全局变量中可以访问的是 Vue
  //     commonjs: 'vue', // 可以将vue作为一个 CommonJS 模块访问
  //     commonjs2: 'vue', // 和上面的类似，但导出的是 module.exports.default
  //     amd: 'vue', // 类似于 commonjs，但使用 AMD 模块系统
  //   },
  // },
  mode: 'development',
  devtool: 'source-map',
  // externals: {
  //     vue: 'Vue'
  // },
  resolve: {
    // 配置模块如会解析
    extensions: ['.vue', '.js', '.json'], // 引入这些文件 可以不带后缀 按顺序解析
    alias: {
      '@': join('../src'), // @方式引入资源
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.m?js$/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/public/index.html' }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'lib-style/[name].css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
