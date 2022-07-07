function one(element) {
  element.addEventListener ('click',function(){
    console.log(this);
  });
}

function two(element) {
  element.addEventListener('click', () =>{
    console.log(this);
    //여깃는 this는 위에 함수이다.
  })
}

function three(element) {
  let getValue = element.map(element => element);
}

//function이 있으면 밑에 에로우를 쓸 확률이 높다
//외워서 쓰면 큰일남
