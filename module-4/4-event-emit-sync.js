const fs = require('fs');
const EventEmitter = require('events');
class ByTime extends EventEmitter {
    execute(aFunc, ...args) {
        console.time('execute');
        aFunc(...args, (err, data)=> {
            if(err) {
                return this.emit('error', err);
            }
            this.emit('data', data);
            console.timeEnd('execute');
        })
    }
}

const byTime = new ByTime();
byTime.on('data', (data)=> {
    console.log(`Length: ${data.length}`);
})
byTime.on('error', console.error);

//without error event
byTime.execute(fs.readFile, __filename);

//for error event
//byTime.execute(fs.readFile, '');

