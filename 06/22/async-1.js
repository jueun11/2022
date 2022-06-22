// console.log(typeof text());
function text() {
  return `<div>hello</div>`;
}

function section(){
  return `<section>bye</section>`;
}


let timeA = setTimeout(() => {
  console.log(text());
  let timetB = setTimeout(() => {
    console.log(section());
  }, 1000);
},0);
