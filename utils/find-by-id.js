export function findById(allPokemon, id){
    for (let item of allPokemon) {
        if (item.id === id) {
            return item;
        }
    }
}
