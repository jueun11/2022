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


// * Venusaur는 몇번째 포켓몬인가

console.log("Venusaur는 " + (pokemon.all().indexOf('Venusaur')+1)+"번째 포켓몬이다");

// * 불러온건 몇번째 포켓몬인가

console.log(getPokemon + "는 " + (pokemon.all().indexOf(getPokemon)+1)+"번째 포켓몬이다");










