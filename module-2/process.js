//process is an event emitter

process.on('exit', (code)=> {
    //do one final synchronous operation
    //before the node process terminates
    console.log(`About to exit with code: ${code}`);
})

process.on('uncaughtExcetpion', (err)=> {
    //something went unhandled
    //Do any cleanup exit anyway!
    console.error(`uncaughtExcetpion: ${err}`);
    process.exit(1);
})

//keeo the event loop busy
process.stdin.resume();

//trigger a TypeError exception
console.dog();