const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // mode : 개발용인지 배포용인지 확인
  mode: "development",
  // entry : 진입점
  entry: {
    index: "./src/index.js",
  },
  // output : 번들링된 파일을 내보내는 동작에 관한 명령
  output: {
    // 생성할 폴더 위치
    path: path.resolve(__dirname, "build"),
    // 생성할 파일 이름
    filename: "[name].js",
    // 번들링을 할 때 마다 파일을 삭제하고 다시 생성
    clean: true,
  },
  // loader : js나 json 파일이 아닌것을 번들링함
  module: {
    // rules : Array
    rules: [
      {
        // test : 테스트를 통과하는 모듈의 파일 규칙을 정함
        test: /.(js|jsx)$/,
        // loader === use
        loader: "babel-loader",
        // exclude : 테스트에서 제외할 경로
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  // plugins : 번들링된 결과의 후속처리
  plugins: [
    // html 문서에 javascript 번들링 결과를 자동으로 삽입
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  // optimization : 최적화
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
