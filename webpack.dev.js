const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: { static: path.resolve(__dirname, "dist"), hot: true },
});
