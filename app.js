// import functions and grab DOM elements
import { getRandomPokemon } from './utils/utils.js';
import { renderPokemon } from './render/render-pokemon.js';
import { getPokedex, encounterPokemon, catchPokemon } from './utils/pokedex-mgmt.js';

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const catchBtn = document.querySelector('#catch-btn');
let newArr = getRandomPokemon();

renderPokemon(newArr);

newArr.forEach(({ id }) =>{
    encounterPokemon(id);
});

// console.log(getPokedex());

catchBtn.addEventListener('click', () => {
    const selected = document.querySelector('input:checked');
    //add selected pokemon to captured
    let captured = newArr[selected.value].id;
    catchPokemon(captured);
    console.log(getPokedex());
});




 