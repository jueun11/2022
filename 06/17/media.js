const page = Array.from(document.getElementsByClassName('page'));

const title = document.getElementById('title');
const menu = Array.from(document.querySelectorAll('ul > li'));

for(i = 0; i< menu.length; i++){
  menu[i].addEventListener('click',function(){
    let value = menu.indexOf(this);
    console.log(value);
    for(a = 0; a<page.length; a++){
      page[a].style.display = "none";
      page[value+1].style.display = "flex";
    }
  });
}

title.addEventListener('click',function(){
  for(a = 0; a<page.length; a++){
    page[a].style.display = "none";
  }
  page[0].style.display = "flex";
});