const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: { contentBase: path.resolve(__dirname, "dist"), compress: true, port: 9000 },
});
