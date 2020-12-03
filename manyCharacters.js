const fetch = require('node-fetch');

function manyCharacters() {
    Promise.all([
        fetch('https://rickandmortyapi.com/api/character')
    ])
        .then(([resRickAndMorty]) => {
            console.log(resRickAndMorty)
        })

};

module.exports = {
    manyCharacters
}
