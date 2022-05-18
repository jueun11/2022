// const memberOne = {
//   name : "김주은",
//   gender : "female",
//   age : 23,
//   deskNumber : 20,
//   glasses : true,
//   married : 'nono',
//   talmo : false,
//   smartphone : "folder phone"
// }

// const memberTwo = {
//   name : "김주현",
//   gender : "male",
//   age : 25,
//   deskNumber : 25,
//   glasses : true,
//   married : 'nono',
//   talmo : false,
//   smartphone : "iphone"
// }

// console.log(memberOne.name);
// console.log(memberTwo.name);

// * 생성자 함수 : constructor function
// * 객체를 찍어내는 거푸집 틀
// * 석고 뜨는 함수

function Member(name, gender, age, deskNumber, glasses, married,talmo,smartphone) {
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.deskNumber = deskNumber,
  this.glasses = glasses,
  this.married = married,
  this.talmo = talmo,
  this.smartphone = smartphone
}

const memberOne = new Member("김주은","female","24","18","false","nono","false","LG")
console.dir(memberOne);

const testOne = new Date();
console.dir(testOne.getHours());

function ampm(hour, msg) {
  if(hour > 12) {
    console.log(msg + (hour-12) + "시 입니다")
    console.log(memberOne.smartphone);
  } else {
    console.log("오전입니다 : " + hour);
  }
}

ampm(testOne.getHours(), "오후입니다");

let oneDay = new hour();
console.log(oneDay);