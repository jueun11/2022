let a = 1;
let b = 1;
let c = 1;



// function valueTest(){
//   if(typeof a === "number"){
//     console.log("변수 a는 데이터타입이 숫자입니다");
//   } else {
//     console.log("변수 a는 숫자타입이 아닙니다");
//   }
//   if(typeof b === "number") {
//     console.log("변수 b는 숫자타입이 아닙니다");
//   }  
// };

// valueTest();

// function valueTestTwo() {
//   if(typeof a === "number" && typeof b === "number") {
//     console.log("변수 a와 b는 모두 number 타입입니다");
//   } else {
//     console.log("다 모르겠는데, 둘중 하나이거나 둘다 number가 아닐수 있습니다");
//   }
// }

function valueTestTwo() {
  if(typeof a=== "string") {
    console.log("a는 srting입니다");
  } else {
    if(typeof a === "number"){
      console.log("a는 number입니다");
      if(a === 1) {
        console.log('a는 1입니다');
      } else {
        console.log("a는 1이 아닙니다");
      }
    } else {
      console.log ("a는 1이 아닐까요");
    }
  }
}

valueTestTwo();





function valueTestThree() {
  
}




valueTestThree();