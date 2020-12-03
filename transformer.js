const fs = require('fs').promises

const transformer = (src) => {
    return fs.readFile(src, 'utf-8')
        .then(data => data.replace(/[^a-z]/g, ''))
        .then(data => data.toUpperCase())
        .then(data => data.split('').reverse().join(''))
};

transformer('./data.js')

module.exports = {

    transformer
}