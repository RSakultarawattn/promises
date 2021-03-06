const fs = require('fs').promises
const { getCharacter } = require('./rickAndMortyApi.js');

describe('get a character', () => {
    const expected = {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
    };
    it('gets a single character', async () => {
        const result = await getCharacter(1)
        expect(expected).toEqual(result);
    })
})