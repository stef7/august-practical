const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");
const PATHS = {
  src: path.join(__dirname, "dist"),
  //dist: path.join(__dirname, "dist"),
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              // options...
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    new PurgecssPlugin({
      paths: () => glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
};
