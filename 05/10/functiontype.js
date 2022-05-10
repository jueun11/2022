
//* 선언 (declaration)
function typeA() {

}
//* 전역 스코프 (global)

typeA();
//* 기명(이름이 있는) 선언방식


// * 익명 함수 (anoymous function) / 함수 리터널(literal) : 직접 새긴다 
// * 함수표현식 (function expression)
const typeB = function() {

}
// * 제작자는 알지만 외부사람은 모르는 방식 : 권장되는 방식
typeB();




// * arrow function (화살표 함수)
// * 함수표현식과 같은 기능
// * 축약형(개발자들이 귀찮다고)
// * 특정 작동 때문에 -> 최신문법

const typeC = () => {}

const typeE = a => {} // * 매개변수가 하나일때는 소괄호도 안써도돼
const typeD = function () {}
// * 둘이 같은거임



//비교연산자는 >=이다 . 헷깔리지x