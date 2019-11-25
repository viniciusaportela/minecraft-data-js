const mcRegion = require('./');
const fs = require('fs');
const joinPath = require('path').join;
const mcaData = fs.readFileSync(joinPath(__dirname, './samples/r.0.0.mca'), 'binary');

let region = mcRegion(mcaData);

(async () => {
    let chunk = await region.getChunk(4, 1);
    console.log('Result: ', chunk);

    fs.writeFileSync(joinPath(__dirname, '/chunk.json'), JSON.stringify(chunk));
})();