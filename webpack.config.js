const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackSkipAssetsPlugin = require('html-webpack-skip-assets-plugin').HtmlWebpackSkipAssetsPlugin;
const CopyPlugin = require('copy-webpack-plugin');

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

const baseConfig = {
  entry: {
    //main: "./src/index.js",
    a2: "./src/activity2/script.js",
    a3: "./src/activity3/script.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/activity3/*.json",
          to: path.join(__dirname, "public/activity3"),
          flatten: true,
        },
      ],
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!**/*.json"],
      cleanAfterEveryBuildPatterns: ["!**/*.json"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: "activity2/index.html",
      template: path.resolve(__dirname, "src", "activity2/index.html"),
      skipAssets: [/a(ctivity|)3/],
    }),
    new HtmlWebpackPlugin({
      filename: "activity3/index.html",
      template: path.resolve(__dirname, "src", "activity3/index.html"),
      skipAssets: [/a(ctivity|)2/],
    }),
    new HtmlWebpackSkipAssetsPlugin(),
  ],
  output: {
    filename: "js/[name].js",
    chunkFilename: "[name].chunk.js",
    path: path.join(__dirname, "public"),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        a2styles: {
          name: "a2",
          test: (m, c, entry = "a2") =>
            m.constructor.name === "CssModule" && recursiveIssuer(m) === entry,
          chunks: "all",
          enforce: true,
        },
        a3styles: {
          name: "a3",
          test: (m, c, entry = "a3") =>
            m.constructor.name === "CssModule" && recursiveIssuer(m) === entry,
          chunks: "all",
          enforce: true,
        },
      },
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
        test: /\.(png|jpg|gif|svg|htaccess)$/,
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
