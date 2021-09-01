import { getPokedex } from '../utils/pokedex-mgmt.js';
export { renderStats };


function renderStats(arr){
    let currentPokedex = getPokedex();
    let counter = 1;

    arr.forEach(({ id }) => {
        const newPokemon = currentPokedex.find(element => element.id === id);
        const encounteredEl = document.getElementById(`encountered-render-${counter}`);
        const capturedEl = document.getElementById(`captured-render-${counter}`);
        encounteredEl.textContent = newPokemon.encountered;
        capturedEl.textContent = newPokemon.captured;
        counter++;
    });
    

}

