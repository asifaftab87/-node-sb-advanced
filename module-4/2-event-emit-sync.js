const EventEmitter = require('events');
class ByLog extends EventEmitter {
    execute(func) {
        console.log('Before executing');
        this.emit('begin');
        func();
        this.emit('end');
        console.log('After executing');
    }
}

const byLog = new ByLog();
byLog.on('begin', ()=> console.log('About to execute'));
byLog.on('end', ()=> console.log('Done with execute'));
byLog.execute(()=> setTimeout(()=> console.log('Executing task'), 500)
);

