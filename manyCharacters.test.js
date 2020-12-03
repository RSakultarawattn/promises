const fs = require('fs').promises
const { manyCharacters } = require('./manyCharacters.js');



describe('manyCharacters function', () => {

    it('returns a list of characters', async () => {

        const characters = await manyCharacters([1, 3, 5, 7]);
        expect(characters).toEqual([
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { name: 'Summer Smith', species: 'Human', status: 'Alive' },
            { name: 'Jerry Smith', species: 'Human', status: 'Alive' },
            { name: 'Abradolf Lincler', species: 'Human', status: 'unknown' },

        ]);
    })
})