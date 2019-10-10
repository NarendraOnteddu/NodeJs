var http= require("http");
http.createServer(function(req, res){
      res.end("Hello Node Js\n");
}).listen(3000);
console.log("server is running on 3000 port");