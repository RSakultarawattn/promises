const fs = require('fs').promises;

const copy = (src, dst) => {
    return fs.readFile(src, 'utf-8')
        .then(data => fs.writeFile(dst, data))
}

//copy('./README.md', './READMEAGAIN.md')

module.exports = {
    copy
}