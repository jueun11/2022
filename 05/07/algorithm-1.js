let a = 0;


let test = setInterval(function(){
  console.log(a);
  a++;
  if( a === 10) {
    console.log('hello');
    // clearInterval(test);
    a = 0;
  }
},1000);

console.log(a);


// let timer = setInterval(function(){
//   console.log(current);
//   current++;
//   if(current===60){
//     console.log('1분 경과');
//     clearInterval(timer);
// //시작과 종류
//   }
// }, 16);