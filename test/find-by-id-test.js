import { findById } from '../utils/find-by-id.js';

const test = QUnit.test;

test('findById should take in the pokedex and the id to match and return the requested pokemon', (expect) => {
    const pokedex = [
        {
            id: 5,
            encountered: 1,
            captured: 1
        },
        {
            id: 7,
            encountered: 2,
            captured: 0
        },
        {
            id: 9,
            encountered: 5,
            captured: 3
        }
    ];

    const expected = {
        id: 9,
        encountered: 5,
        captured: 3
    };

    const actual = findById(pokedex, 9);

    expect.deepEqual(actual, expected);
});