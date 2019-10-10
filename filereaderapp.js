var fsVar = require('fs');

var read_file = fsVar.readFileSync('transactiondata.txt','utf8');

console.log(read_file);