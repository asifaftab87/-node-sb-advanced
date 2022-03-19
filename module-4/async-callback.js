const fs = require('fs');

const readFileArray = function(file, cb) {
    fs.readFile(file, function(err, data) {
        if(err) {
            return cb(err);
        }
        const lines = data.toString().trim().split('\n');
        cb(null, lines);
    });
}

readFileArray('./num-file', (err, lines)=> {
    if(err)
        throw err;
    const nums = lines.map(Number);
    const oddNums = nums.filter(num=> num%2===1);
    console.log('odd numbers count: ', oddNums.length);
})