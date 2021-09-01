import { renderPokemon } from '../render/render-pokemon.js';
export { setPokedex, getPokedex, encounterPokemon, catchPokemon, newSetup };

const POKEDEX = 'POKEDEX';

function setPokedex(pokedex) {
    const pokedexToString = JSON.stringify(pokedex);

    localStorage.setItem(POKEDEX, pokedexToString);
}

function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (!stringyPokedex) {
        return [];
    }

    return JSON.parse(stringyPokedex);
}

function encounterPokemon(id) {
    const currentPokedex = getPokedex();

    const seenPokemon = currentPokedex.find(element => element.id === id);

    if (seenPokemon) {
        seenPokemon.encountered++;
    } else if (!seenPokemon) {
        const newObj = { id: id, encountered: 1, captured: 0 };
        currentPokedex.push(newObj);
    }
    
    setPokedex(currentPokedex);
}

function catchPokemon(id) {
    const currentPokedex = getPokedex();

    const caughtPokemon = currentPokedex.find(element => element.id === id);

    caughtPokemon.captured++;
    
    setPokedex(currentPokedex);
}

function newSetup(arr){

    renderPokemon(arr);

    arr.forEach(({ id }) =>{
        encounterPokemon(id);
    });
}
