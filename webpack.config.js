const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const baseConfig = {
  entry: {
    //main: "./src/index.js",
    activity2: "./src/activity2/script.js",
    activity3: "./src/activity3/script.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: "activity2/index.html",
      template: path.resolve(__dirname, "src", "activity2/index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "activity3/index.html",
      template: path.resolve(__dirname, "src", "activity3/index.html"),
    }),
    /* *
    new HtmlWebpackTagsPlugin({
      files: ['activity2/index.html'],
      tags: ['activity2/script.js']
    }),
    new HtmlWebpackTagsPlugin({
      files: ['activity3/index.html'],
      tags: ['activity3/script.js']
    }),
    /* */
  ],
  output: {
    filename: "js/[name].js",
    chunkFilename: '[name].chunk.js',
    path: path.join(__dirname, "dist"),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.html?$/,
        include: [path.resolve(__dirname, "src")],
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        exclude: "/node_modules/",
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: "style-loader" },
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: path.resolve(__dirname, "src/"),
              outputPath: "",
              publicPath: "../",
              useRelativePaths: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = baseConfig;
