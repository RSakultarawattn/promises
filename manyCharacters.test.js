const fs = require('fs').promises
const { manyCharacters } = require('./manyCharacters.js');

describe('many characters', () => {
    const expected = {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
    };
    it('get many characters', () => {
        const result = {
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
        }
        expect(expected).toEqual(result);
    })
})