// 모듈 시작
(function(window) {
  var sum = function(x, y) {  // 모듈 내의 전역변수
    return x + y;
  }

  var sub = function(x, y) {  // 모듈 내의 전역변수
    return x - y;
  }

  var math = {
    findSum: function(a, b) {
      return sum(a, b);
    },
    findSub: function(a, b) {
      return sub(a, b);
    }
  }

  window.math = math;  // math 변수로 메인 프로그램에 export
}) (window
//모듈 끝

console.log(math.findSum(1, 2)); // 실행 결과 "3"
console.log(math.findSub(1, 2)); // 실행 결과 "-1"
