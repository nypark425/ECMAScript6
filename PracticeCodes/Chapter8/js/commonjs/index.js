// "./math" -> 모듈로 취급하는 파일 이름. 확장자는 자동.
var math = require("./math").math;
console.log("실습 - commonjs");
console.log(math.findSum(1, 2));  // 실행 결과 "3"
console.log(math.findSub(1, 2));  // 실행 결과 "-1"