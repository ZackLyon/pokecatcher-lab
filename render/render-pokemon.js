
export { renderPokemon }; //could not TDD this function due to the image source change

function renderPokemon(arr){ // takes in an array
    arr.forEach((item, i) => {
        const imgEl = document.getElementById(`render-${i + 1}`); // index starts at 0, so add 1 for correct render element
        imgEl.src = item.url_image; //counter starts at 1, so subtract one for arr index
    });
}
