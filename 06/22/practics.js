let nuri = 100;

// work .1  1초뒤에 1번 행동에는  nuri가 10이 덧셈되고 콘솔에 출력된다
//work .2 1초뒤에 2번 행동에는 nori를 30빼고 콘솔에 출력된다

//todo : 총 2초간 두번의 계산을 진행시킨다

function a (){
  setTimeout(() => {
  }, 1000);
}

function first() {
  return new Promise(function(resolve, regject){
    setTimeout(function(){
      nuri = nuri +10;
      console.log(nuri);
      resolve();
    },1000);
  });
}

first()
 .then(function(data) {
  return new Promise(function(resolve, regject){
    setTimeout(function(){
      nuri = nuri -30;
      console.log(nuri);
      resolve();
    },1000);
  });
 })