//자바스크립트로 html제어
const root = document.getElementById('root');
const ul = document.createElement('ul');
root.appendChild(ul);

//li태그 동적으로 만들어주기
// for(let i=0; i < 10; i++) {
//   const li = document.createElement('li');
//   li.textContent = i;
//   ul.appendChild(li);
// }


let liElement = [];
for(let i=0; i < 10; i++) {
  // liElement = liElement +`<li> ${i} </li>`;
  liElement.push (`<li> ${i} </li>`);
}


console.log(liElement);
console.log(liElement.join(""));
//join뒤에 괄호는 구분자이다.. 사이에 드가는 말
ul.innerHTML = liElement.join("");