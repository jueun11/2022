
// * 커피원두 : 20000
// * 우유 : 30000
// * 물 : 100
// * 설탕 : 3000
// * 시럽 : 200
// * 시나몬 : 1000
// * 빨대 : 1000
// * 머그컵 : 300000
// * 플라스틱 컵 : 1000000
// * 얼음 : 200000

const ingredients = {
  coffeewondoo : 20000,
  milk : 30000,
  water : 100,
  sugar : 3000,
  sirub : 200,
  cinnamon : 1000,
  straw : 1000,
  mugcup : 300000,
  takeoutCup : 1000000,
  ice : 20000,
}

const americano = {
  one : ingredients.coffeewondoo,
  two : ingredients.water,
  three : ingredients.takeoutCup
}
const custom = {
  one : ingredients.coffeewondoo,
  two : ingredients.milk,
  three : ingredients.ice,
  four : ingredients.cinnamon,
  five : ingredients.mugcup
}
let americanoPrice = americano.one+americano.two+americano.three;
console.log(ingredients);
console.log(americanoPrice);
console.log(americanoPrice + ingredients.ice);

let customPrice = custom.one + custom.two + custom.three + custom.four +custom.five;
console.log(customPrice);

if(americanoPrice > 100000) {
  console.log('아메리카노 값은 ${americanoPrice} 원 입니다.살거?')
} else {
  console.log('${ameticanoPrice}')
}

// const dinner = {
//   main : "rice",
//   sidedishOne : "kimchi", 
//   sidedishTwo : "spam", 
//   sidedishThree : "eggfry", 
//   dink : "water",
//   tableware : "spoon"
// }
// let dinnermenu = dinner.main+dinner.sidedishOne+dinner.sidedishThree+dinner.dink;
// console.log(dinnermenu);

