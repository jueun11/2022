let dropdownButtons = function() {

}

let dropdownWrappers = document.getElementsByClassName();
// 문서에서 클래스를 가지고 왔겠구나

let activeDropdowns = [];
//? 배열만 선언했네?
// * 원소가 없는데 왜 선언핸놨지?
// todo  : 왜 배열안에 아무것도 없이 선언만 해놨지?

for(let i = 0; i < dropdownWrappers.length; i++) {
  // ? for문으로 해당하는 클래스를 무언가 제어하려고 하나보다

  if(dropdownWrappers[i].classList.contains('active')) {}
  //? if문 조건식이 "클래스를 가지고 있는지 여부를 판단하고 있구나"는 아는 상태
  for(let c = 0; c < dropdownWrappers[i].getElementsByClassName('js-button-dropdown').length; c++) {}
  //? 문서에 있는 클래스를 가지고 for()loop를 확인했다는 것은 확실하다



}

function hideDropdowns(activeDropdowns) {
  //? 이 기능은 무언가 숨기는가보다
  //* 매개변수가 뱅ㄹ이네 배열을 반복문 돌려서 클래스를 지우는 작업을 한다.
  ('active');
}

function toggleDropdown() {
  //? 무언가 토글을 하고싶은가보다

  //todo : this가 무얼 의미하지?
  //? . parentNode, 부모 뭐 인거 같은데 써본적은 없어. 찾아보자

  //todo : toggle() 이건 뭐지?

  //  for()
  //* loop 를 돌려서 무언가 하고있다
  //if()으로 무언가 구별하기 시작했다
  //if()
  //* !== 조건식이 특이하구나
}

// return : 무언가 반환하는 것
// ? {} 중괄호
// todo : (function(){})