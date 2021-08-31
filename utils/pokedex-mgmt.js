import { findById } from './find-by-id.js';
export { setPokedex, getPokedex, encounterPokemon };


const POKEDEX = 'POKEDEX';
// setPokedex(pokedex)************************************
// takes in a pokedex, stringifies it and puts it into local storage


function setPokedex(pokedex) {
    const pokedexToString = JSON.stringify(pokedex);

    localStorage.setItem(POKEDEX, pokedexToString);
}

// getPokedex()*******************************
// retrieves and parses the pokedex in local storage

function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (!stringyPokedex) {
        return [];
    }

    return JSON.parse(stringyPokedex);
}


// encounterPokemon(id)********************

// getPokedex
// If the pokemon has been previously seen, just increment the times seen
// If this is the first time, make a new object with { id: 5, encoutered: 1, caught: 0 }
// setPokedex

function encounterPokemon(idToSearch) {
    const currentPokedex = getPokedex();

    const seenPokemon = findById(currentPokedex, idToSearch);
    console.log(seenPokemon);

    if (seenPokemon) {
        seenPokemon.encountered++;
    } else if (!seenPokemon) {
        const newObj = { id: idToSearch, encountered: 1, captured: 0 };
        currentPokedex.push(newObj);
    }
    
    setPokedex(currentPokedex);
}

// catchPokemon(id)*********************
// getPokedex
// no need to check if it's been encountered. If you got this far, it has been encountered.
// Increment the caught of this pokemon in local storage
// setPokedex