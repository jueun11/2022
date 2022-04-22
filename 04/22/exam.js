let HansotMenu = {
  TunaMayonnaise : 3500,
  spaghetti : 4500,
  squareLunchBox : 5500
}
//함수를 값으로 쓰려면 그 함수를 정의한 것이 위에 있어야한다.



const foodExpenses = {
  PorkCutlet : 9000,
  Shabu : 9500,
  Jajangmyeon : 7000,
  TofuStew : 9000,
  Hamburger : 6000,
  HamburgSteak : 14000,
  Hansot : HansotMenu.TunaMayonnaise
}


console.log(foodExpenses);
const Snack = {
  Coffee : 3500,
  Cocopam : 1000,
  Chandy : 200,
  Mychew : 1500,
  Eclipse : 2500
}

const transportationCost = {
  bus : 2500,
  texi : 9000
}

let money = foodExpenses.Shabu + Snack.Cocopam + transportationCost.bus;
console.log(money);

