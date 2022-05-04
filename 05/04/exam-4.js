
let current = 0;

let timer = setInterval(function(){
  console.log(current);
  current++;
  if(current===60){
    console.log('1분 경과');
    clearInterval(timer);
//시작과 종류
  }
}, 16);
