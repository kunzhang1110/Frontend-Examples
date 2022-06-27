const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: { App: "./src/App.js" },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js", //[name] matches entry object's property name
    clean: true, //clear old files
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js?$/, //regular exp. targeting .js|.jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [  //load backwards, css-loader first then style-loader
          "style-loader",
          {
            loader: "css-loader",
            options: { //enable import object from  .css 
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  plugins: [ //create index.html in dist
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
    }),
  ],
};
