import { setPokedex, getPokedex, encounterPokemon, catchPokemon } from '../utils/pokedex-mgmt.js';

const POKEDEX = 'POKEDEX';
const test = QUnit.test;

test('getPokedex should take in a stringified pokedex and return it in parsed form', (expect) => {

    const pokedex = [
        {
            id: 5,
            encountered: 1
        }
    ];
    
    const expectedPokedex = [
        {
            id: 5,
            encountered: 1
        }
    ];
    
    const stringyPokedex = JSON.stringify(pokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);

    const actual = getPokedex(POKEDEX);

    const expected = expectedPokedex;

    expect.deepEqual(actual, expected);
});

test('setPokedex should take in an array of objects pokedex and store it to local storage in stringified form', (expect) => {

    const pokedex = [
        {
            id: 5,
            encountered: 1
        }
    ];
    
    const stringyPokedex = localStorage.getItem(POKEDEX);

    const actual = setPokedex(pokedex);

    const expected = localStorage.setItem(POKEDEX, stringyPokedex);

    expect.deepEqual(actual, expected);
});

test('encounterPokemon should increment the times encountered if an item is already in the pokedex or add the item and set encountered to 1 if it is not', (expect) => {

    const pokedex = [
        {
            id: 5,
            encountered: 1
        }
    ];
    
    const expectedPokedex = [
        {
            id: 5,
            encountered: 2
        }
    ];
    
    const stringyPokedex = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', stringyPokedex);

    const actual = encounterPokemon(5);

    const stringyExpected = JSON.stringify(expectedPokedex);
    const expected = localStorage.setItem(POKEDEX, stringyExpected);

    expect.deepEqual(actual, expected);
});

test('catchPokemon should take in an id, then increment the times captured for that id', (expect) => {

    const pokedex = [
        {
            id: 5,
            encountered: 1,
            captured: 0
        }
    ];
    
    const expectedPokedex = [
        {
            id: 5,
            encountered: 1,
            captured: 1
        }
    ];
    
    const stringyPokedex = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', stringyPokedex);

    const actual = catchPokemon(5);

    const stringyExpected = JSON.stringify(expectedPokedex);
    const expected = localStorage.setItem(POKEDEX, stringyExpected);

    expect.deepEqual(actual, expected);
});
