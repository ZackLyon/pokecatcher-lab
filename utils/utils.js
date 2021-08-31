import pokemon from '../data/data.js';
export { getRandomPokemon, capturePokemon };

function getRandomPokemon() {
    //get 3 random indices
    let randomIndex1 = randomizeIndex();
    let randomIndex2 = randomizeIndex();
    let randomIndex3 = randomizeIndex();
    
    
    //check if they are unique from each other
    //if they aren't, get 3 random indices
    while (randomIndex1 === randomIndex2 || randomIndex2 === randomIndex3 || randomIndex1 === randomIndex3) {
        randomIndex1 = randomizeIndex();
        randomIndex2 = randomizeIndex();
        randomIndex3 = randomizeIndex();
    }
    //return array of 3 pokemon
    return [pokemon[randomIndex1], pokemon[randomIndex2], pokemon[randomIndex3]];
}

function randomizeIndex() {
    return Math.floor(Math.random() * pokemon.length);
}

function capturePokemon(arr) {
    
}