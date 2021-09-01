// import functions and grab DOM elements
import { getRandomPokemon } from './utils/utils.js';
import { catchPokemon, newSetup } from './utils/pokedex-mgmt.js';

let caughtCounter = 0;

const catchBtn = document.querySelector('#catch-btn');

let newArr = getRandomPokemon();
newSetup(newArr); //display pokemon, increment encounter for each, display stats

catchBtn.addEventListener('click', () => {
    caughtCounter++;
    const selected = document.querySelector('input:checked');
    
    let captured = newArr[selected.value].id;
    catchPokemon(captured);
    if (caughtCounter > 9) {
        caughtCounter = 0;
        window.location = './results/index.html';
    } else {
        let oldArr = [...newArr];
        newArr = getRandomPokemon(oldArr);
        newSetup(newArr);
    }
});
