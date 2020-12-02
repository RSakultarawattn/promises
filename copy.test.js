const fs = require('fs').promises
const { copy } = require('./copy.js');

describe('copy fn', () => {
    afterEach(() => {
        return fs.rm('./READMEAGAIN.md');
    });

    it('copies a file and writes it to disk', async () => {
        await copy('./README.md', './READMEAGAIN.md');
        const contents = await fs.readFile('./READMEAGAIN.md', 'utf-8');
        expect(contents).toEqual('# a;osdljgaldsk');
    })
})