let obj = {
  a : 1,
  b : 2,
  c : 1,
  d : 2,
  sum : function(one, two) {
    if(typeof one === "number" && typeof two === "number"){
    //&&는 앞, 뒤 둘다 충족해야함
      return one + two;
    }
    else {
      console.error("너 지금 데이터타입 입력 잘못했어");
    }
  }
}

console.log(obj.a === obj.b || obj.a === obj.c);
console.log(obj.a === obj.b && abj.a === obj.c);
console.log(obj.sum(obj.a, 4));
//"2"는 string 이다
