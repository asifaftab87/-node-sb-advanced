const fs = require('fs');

const readFileArray = function(file) {
    return new Promise((resolve, reject)=> {
        fs.readFile(file, function(err, data) {
            if(err) {
                return reject(err);
            }
            const lines = data.toString().trim().split('\n');
            resolve(lines);
        });
    })
}
readFileArray('./num-file')
    .then(lines=> {
        const nums = lines.map(Number);
        const oddNums = nums.filter(num=> num%2===1);
        console.log('odd numbers count: ', oddNums.length);
    })
    .catch(console.error());

console.log('Hello World');