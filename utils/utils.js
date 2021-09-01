import pokemon from '../data/data.js';
export { getRandomPokemon };

function getRandomPokemon(arr) {
    //get 3 random indices
    let randomIndex1 = randomizeIndex(arr);
    let randomIndex2 = randomizeIndex(arr);
    let randomIndex3 = randomizeIndex(arr);
    
    
    //check if they are unique from each other
    //if they aren't, get 3 random indices
    while (randomIndex1 === randomIndex2 || randomIndex2 === randomIndex3 || randomIndex1 === randomIndex3) {
        randomIndex1 = randomizeIndex(arr);
        randomIndex2 = randomizeIndex(arr);
        randomIndex3 = randomizeIndex(arr);
    }
    //return array of 3 pokemon
    return [pokemon[randomIndex1], pokemon[randomIndex2], pokemon[randomIndex3]];
}

function randomizeIndex(arr) {
    let random = Math.floor(Math.random() * pokemon.length);

    if (arr){
        arr.forEach(element => {
            if (element.id === pokemon[random].id) {
                random = randomizeIndex(arr);
            }
        });
    }

    return random;
}
