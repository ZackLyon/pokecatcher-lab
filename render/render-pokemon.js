
export { renderPokemon };

function renderPokemon(arr){ // takes in an array
    //make counter=1
    let counter = 1;
    //forEach iterates arr
    // grab image from dom (render-{counter})
    // change source of image to arr[counter-1]
    arr.forEach(() => {
        const imgEl = document.getElementById(`render-${counter}`);
        imgEl.src = arr[counter - 1].url_image; //counter starts at 1, so subtract one for arr index
        counter++;
    });
}
