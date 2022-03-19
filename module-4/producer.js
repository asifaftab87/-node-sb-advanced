const EventEmitter = require('events');

class Producer extends EventEmitter {
    constructor(consumer) {
        super();
        this.tasks = {};
        this.taskId = 1;
        process.nextTick(()=> {
            this.emit('response', 'Type a command (help to list commands)')
        })
        consumer.on('singal', (signal, args)=> {
            switch(signal) {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[signal](args);
                    break;
                default: 
                    this.emit('response', 'Unknown command...')
            }
        })
    }
    tasksString() {
        return Object.keys(this.tasks).map(key=> {
            return `${key}: ${this.tasks[key]}`;
        }).join('\n');
    }
    help() {
        this.emit('response', `Available commands: 
            add task
            ls 
            delete :id`
        );
    }
    add(args) {
        this.tasks[this.taskId] = args.join(' ');
        this.emit('response', `Added task ${this.taskId}`);
        this.taskId++;
    }
    ls() {
        this.emit('response', `Tasks:\n${this.tasksString()}`);
    }
    delete(args) {
        delete(this.tasks[args[0]]);
        this.emit('response', `deleted task id: ${args[0]}`);
    }
}
module.exports = (consumer)=> new Producer(consumer);
