
// * 고차함수 : 제작자가 만드는 것
// * higer order function
// * 알고리즘 제작법

function typeA() {
  console.log('아이워즈카');
}
// typeA();


function typeB() {

  // * typeB의 함수 알고리즘은
  // * 무슨 문자열을 콘솔에 찍은 다음
  // * typeA() 함수를 호출해준다

  console.log('피곤타');
  typeA();
}
typeB();

function typeC(target) {
  // target.addEventListener('click',function(){});
  target.addEventListener('click', ()=>{});

  // target.addEventListener('scroll',function(){});
  target.addEventListener('scroll',()=>{});

  // target.addEventListener('wheel',function(){});
  target.addEventListener('wheel',()=>{});


}

typeC(root);





// * 객체로 묶어서 관리한다
const typeP = {
  objectA = function() {
    console.log('string');
  },
  objectB = function() {

  }

}

typeP.objectA("hello");