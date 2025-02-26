const sculptureList = require('./data.js'); // import data.js

let sculptureListLengths = {};

for (var i = 0; i < sculptureList.length; i++){
    const sculpture = sculptureList[i];
    sculptureListLengths[i] = {};
    
    for (let key in sculpture) {
        if (typeof sculpture[key] === 'string') {
            sculptureListLengths[i][key] = sculpture[key].length;
        } else {
            sculptureListLengths[i][key] = sculpture[key];
        }
    }
}

console.log(sculptureListLengths);