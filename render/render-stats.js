import { getPokedex } from '../utils/pokedex-mgmt.js';
export { renderStats };

function renderStats(arr){
    let currentPokedex = getPokedex();

    arr.forEach(({ id }, i) => {
        const newPokemon = currentPokedex.find(element => element.id === id);
        const encounteredEl = document.getElementById(`encountered-render-${i + 1}`);
        const capturedEl = document.getElementById(`captured-render-${i + 1}`);
        encounteredEl.textContent = newPokemon.encountered;
        capturedEl.textContent = newPokemon.captured;
    });
}
