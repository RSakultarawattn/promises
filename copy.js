const fs = require('fs').promises;

const copy = (src, dst) => {
    return fs.readFile(src, 'utf-8')
        .then(data => fs.writeFile(dst, data))
}


module.exports = {
    copy
}