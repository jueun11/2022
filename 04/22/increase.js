const arr = ["카푸치노", "아메리카노", "맥주", "소주", "칭따오"];

let count = 0;
let indexValue = 0;
// 인덱스에 사칙연산을 써먹으려고 변수를 하나 만들어줬다
let timer = setInterval(function() {
  if(indexValue < arr.length) {
    //인덱스밸류가 총 길이값+1보다 작으면(0부터 시작이라 5는 초과이다.참은 01234까지,마지막엔불일치)
    console.log(arr[indexValue]);
    //변수 arr에 숫자를 대입, 해당 숫자에 해당하는 몇번째의 값이 나온다
    indexValue++;
    //그리고 참일때마다 변수값을 하나씩 올려줌 그럼 언젠가는 초과하겟지?
  } 
  
  else{
    //초과햇을때. 불일치가 된다
    indexValue = 0;
    //그럼 다시 밸류값 0으로 돌려보냄
    count++;
    //카운트라는 변수의 값을 하나씩올림
  }
  
  if(count > 3) {
    //카운트 값이 3보다 커지면
    clearInterval(timer);
    //더이상 반복안함 안락사
  }



}, 1000);





// setTimeout(function(){

//   console.log(arr[indexValue]);
//   indexValue++;

//   if (indexValue ===arr.length) {
//     clearTimeout();
//   }
//   clearTimeout(indexValue);
// },5000)
