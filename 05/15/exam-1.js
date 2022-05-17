const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.
let count = 0;
for (let i = 0; i < dummyText.length; i++) {
  if(dummyText[i] === "of") {
    count++;
  }
}
console.log(count);

let count = 0;
let result = dummyText.filter(function(index){
  //?필터 사용.. 필터는 조건에 참에 따른 요소만 실행한다
  if ( index === "of" ) {
    //*만약 index가 of라면 (dummyText의 항목들=index)
    count++;
    //*카운트를 증가시킨다
    return count;
    //? 카운트를 리턴시킨다? 표시한다는 걸까
  };
});
//* dummyText의 항목중 of와 일치하는 값이 있다면 카운트를 증가시킨다. 몇개인지 센다는 것이 이런것
console.log(result);
//* result값을 콘솔에 출력한다

let test2 = dummyText.filter(index => {
//* 위에꺼랑 같은것이다. 자바스크립트만의 표현
//* function을 생략하고 function()<<에 들어가는 요소를 쓰고 , 그 뒤에 => 화살표를 넣는다
});
// Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.

let tempArr = []
let mapping = dummyText.map(function(value,index){
  if(value === "dummy") {
    value === "sementic";
  }
})

let test = dummyText.map(value => {if(value === "dummy") { value = "sementic"}})
//위랑 같은건데 줄인거임..
// Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.

dummyText.forEach(function(value,index){
  if(value === "the"){
    dummyText[index + 1] = "web";
  }
}) 
// Todo : Q-5. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요.

const countTextLength = dummyText.reduce(function(beforeValue,currentValue){
  return beforeValue + currentValue;
})
console.log(countTextLength.length);