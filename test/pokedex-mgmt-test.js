import { setPokedex, getPokedex, encounterPokemon, catchPokemon } from '../utils/pokedex-mgmt.js';

const POKEDEX = 'POKEDEX';
const test = QUnit.test;

test('getPokedex should take in a stringified pokedex and return it in parsed form', (expect) => {

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
            captured: 0
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
            encountered: 1,
            captured: 0
        }
    ];
    
   
    setPokedex(pokedex);

    const actual = JSON.parse(localStorage.getItem(POKEDEX));

    const expected = pokedex;

    expect.deepEqual(actual, expected);
});

test('encounterPokemon should increment the times encountered if an item is already in the pokedex', (expect) => {

    const pokedex = [
        {
            id: 5,
            encountered: 1,
            captured: 0
        }
    ];
    
    const expected = [
        {
            id: 5,
            encountered: 2,
            captured: 0
        }
    ];
    
    const stringyPokedex = JSON.stringify(pokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);

    encounterPokemon(5);

    const actual = JSON.parse(localStorage.getItem(POKEDEX));

    expect.deepEqual(actual, expected);
});

test('encounterPokemon should add the item and set encountered to 1 if item is not present', (expect) => {

    const emptyPokedex = [];

    const stringEmpty = JSON.stringify(emptyPokedex);
    localStorage.setItem(POKEDEX, stringEmpty);
    
    const expected = [
        {
            id: 5,
            encountered: 1,
            captured: 0
        }
    ];

    encounterPokemon(5);

    const actual = JSON.parse(localStorage.getItem(POKEDEX));

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
    
    const expected = [
        {
            id: 5,
            encountered: 1,
            captured: 1
        }
    ];
    
    const stringyPokedex = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', stringyPokedex);

    catchPokemon(5);

    const actual = JSON.parse(localStorage.getItem(POKEDEX));

    expect.deepEqual(actual, expected);
});
