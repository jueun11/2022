const pokemon = require('pokemon');

console.log(pokemon.all());
console.log(pokemon.getName(100, "ko"));

function randomPokemon(minStart, maxArrayLength) {
  let result;
  if(typeof minStart === "number" && typeof maxArrayLength === "number") {
    min = Math.ceil(minStart);
    max = Math.floor(maxArrayLength);
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }
}
const getPokemon = pokemon.getName(randomPokemon(1, pokemon.all().length), "ko"); 
console.log(`현재 포켓몬스터는 ${pokemon.all().length}개 있습니다.`);
console.log(getPokemon);
//전체 포켓몬은 pokemon.all()


// // * Venusaur는 몇번째 포켓몬인가 indexOf 활용

// console.log("Venusaur는 " + (pokemon.all().indexOf('Venusaur')+1)+"번째 포켓몬이다");


// //* p,k가 들어가는 포켓몬의 수 join 활용
// let joinpokemon = pokemon.all().join()
// // console.log(joinpokemon);
// let count = 0;
// for (let i = 0; i < joinpokemon.length; i++) {
//   if(joinpokemon[i] === "p") {
//     count++;
//   }
//   if(joinpokemon[i] === "k") {
//     count++;
//   }
// }
// console.log(count);

// const pokemons = pokemon.all();

//   //* map 활용.. 각 요소의 글자 수 구하기

//   console.log(pokemons);
//   let test = pokemons.map(pokemon => pokemon.length);

//   console.log(test);









