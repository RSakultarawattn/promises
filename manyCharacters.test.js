const fs = require('fs').promises
const { manyCharacters } = require('./manyCharacters.js');
const fetch = require('node-fetch')

jest.mock('node-fetch')


describe('manyCharacters function', () => {

    it('returns a list of characters', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve(
                {
                    "id": 1,
                    "name": "Rick Sanchez",
                    "status": "Alive",
                    "species": "Human",
                    "type": "",
                    "gender": "Male",
                    "origin": {
                        "name": "Earth (C-137)",
                        "url": "https://rickandmortyapi.com/api/location/1"
                    }
                }
            )
        })
        const characters = await manyCharacters([1, 3, 5, 7]);
        expect(characters).toEqual([
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },

        ]);
    })
})