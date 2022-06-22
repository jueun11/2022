function a() {
  return new Promise(function(resolve, regject){;
      setTimeout(function(){
        resolve("피곤타");
      },1000);
  });
}
a().then(function(data){
  return new.promise(function(resolve, regject ) {
    console.lo
    setTimeout.console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다")
    return
    resolve(data);
    },1000);
console.log(a());

a.apply() ;