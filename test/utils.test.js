// IMPORT MODULES under test here:
import { getRandomPokemon } from '../utils/utils.js';

const test = QUnit.test;

test('getRandomPokemon should return 3 unique pokemon in an array', (expect) => {

    const actual = getRandomPokemon();

    expect.equal(actual.length, 3, 'are there 3 in there?'); 

    expect.equal(actual[0] !== actual[1], true, 'index 0 is not the same as index 1');
    expect.equal(actual[0] !== actual[2], true, 'index 0 is not the same as index 2');
    expect.equal(actual[2] !== actual[1], true, 'index 2 is not the same as index 1');
});
