// import functions and grab DOM elements
import { getRandomPokemon } from './utils/utils.js';
import { catchPokemon, newSetup } from './utils/pokedex-mgmt.js';

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const catchBtn = document.querySelector('#catch-btn');

let newArr = getRandomPokemon();
newSetup(newArr); //display pokemon, increment encounter for each, display stats

catchBtn.addEventListener('click', () => {
    const selected = document.querySelector('input:checked');
    
    let captured = newArr[selected.value].id;
    catchPokemon(captured);
    let oldArr = [...newArr];
    newArr = getRandomPokemon(oldArr);
    newSetup(newArr);
});
