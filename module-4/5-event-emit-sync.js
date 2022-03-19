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
/*
//this will execute for every error
process.on('uncaughtException', (err)=> {
    console.log(err);
    //do some cleanup
    process.exit(1);    //exit anyway
});
*/
//this will execute for once
process.once('uncaughtException', (err)=> {
    console.log(err);
    //do some cleanup
    process.exit(1);    //exit anyway
});

byTime.execute(fs.readFile, __filename);
byTime.execute(fs.readFile, '');
byTime.execute(fs.readFile, 123);
//byTime.execute(fs.readFile, '');

