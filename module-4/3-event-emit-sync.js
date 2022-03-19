const fs = require('fs');
const EventEmitter = require('events');
class ByLog extends EventEmitter {
    execute(aFunc, ...args) {
        console.time('execute');
        this.emit('begin');
        aFunc(...args, (err, data)=> {
            if(err) {
                return this.emit('error', err);
            }
            //console.log('data: ', data);
            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        })
    }
}

const byLog = new ByLog();
byLog.on('begin', ()=> console.log('About to execute'));
byLog.on('end', ()=> console.log('Done with execute'));
byLog.execute(fs.readFile, __filename);

