let Value = 0;
//* 변수 선언과 동시에 값을 대입했다. : 초기화 했다
//* initialize, init
// Value = 100;
//* 값을 새로 할당(assigment)
//* = (대입연산자를 활용)
// console.log(Value);

// setInterval(function{},interval);
//* 첫번째 파라미터(매개변수) 함수, 매개변수자리에 실행할 함수가 자리잡은 것을 "콜백함수"
//* callback function
//* callback function hell : 굉장히 헷갈리는 포인트가 있게 될것

let interval = 0.1;
const timer = setInterval(function(){
  //* 함수를 변수에  담수에 담는 패턴 : 함수 리터럴, 함수 표현식
  //* 식별하기 위해 변수에 담았다
  console.log(Value);
  Value++;
  if(Value > 100) {
    clearInterval(timer);
  }
  // Value = Value +2;
  // Value += 2;
  // //*위에랑 같은거 2씩 더한다
},interval);

