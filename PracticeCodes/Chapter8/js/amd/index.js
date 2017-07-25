// 첫번째 파라미터의 math: AMD 모듈로 취급할 파일명. 확장자 .js는 RequireJS가 알아서 붙임
// 두번째 파라미터의 math: export한 변수
require(["math"], function(math) {
  console.log("실습 - amd");
  console.log(math.findSum(1, 2));  // 실행 결과 "3"
  console.log(math.findSub(1, 2));  // 실행 결과 "-1"
})