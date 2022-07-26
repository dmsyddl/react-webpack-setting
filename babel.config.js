// 문법을 바꿔준다.
module.exports = {
  // presets : 바벨 기본 셋팅 (2개를 쓴 이유? ES6 -> ES5, react -> ES5 로 변환하기 위해)
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
