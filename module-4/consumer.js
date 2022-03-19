const EventEmitter = require('events');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const consumer = new EventEmitter();
const producer = require('./producer')(consumer);
producer.on('response', resp=> {
    console.log(`${resp}`);
});

let signal, args;
rl.on('line', (input)=> { 
    [signal, ...args] = input.split(' ');
    consumer.emit('singal', signal, args);
})

