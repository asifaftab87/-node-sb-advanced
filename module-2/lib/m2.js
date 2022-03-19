exports.id = 'm2';

exports.content = [2];
exports.content.push(2);
exports.content.push(222);
const m1 = require('./m1');
console.log('m1 not loaded yet', m1);    //loaded: false
