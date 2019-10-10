var fs = require(fs);
let path= "./";

fs.lstat(path, (err,stats)=>{
    if(err)
       return console.log(err);
     console.log('File: ${stats.isFile()}') 
     console.log('Directory: ${stats.isDirectory()}')  
});