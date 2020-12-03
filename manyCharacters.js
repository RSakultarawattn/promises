const fetch = require('node-fetch');


function getCharacter(id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(character => {
            return {
                name: character.name,
                status: character.status,
                species: character.species
            }
        })

};
const manyCharacters = ids => {

    return Promise.all(ids.map(id => getCharacter(id)));
};

module.exports = {
    manyCharacters
};
