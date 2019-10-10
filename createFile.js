var fs = require('fs');
var myArgs = process.argv.slice(2);
console.log(myArgs);
fs.writeFileSync('writefile.txt',myArgs);