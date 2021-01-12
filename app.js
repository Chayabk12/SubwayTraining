//Connecting to server Assignment1

const http = require('http')

/* http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write("Succesfully listening to port 8989")
    res.end()
}).listen(8989)
 */
var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write("Succesfully listening to port 8686")
    res.end()
})

server.listen(8686, function(){
    console.log ("server created")
})


