const webpack = require("@cypress/webpack-preprocessor");

const webpackOptions = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  }
};

const options = {
  webpackOptions,
  watchOptions: {}
};

module.exports = on => {
  on("file:preprocessor", webpack(options));
};
