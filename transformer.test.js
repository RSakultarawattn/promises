const fs = require('fs').promises
const { transformer } = require('./transformer.js');

describe('transformer function', () => {
    // afterEach(() => {
    //     return fs.rm('./data.js')
    // })
    it('transform the string', async () => {
        const result = await transformer('./data.js')




        expect(result).toEqual('SUMITP'
        );
    })
})