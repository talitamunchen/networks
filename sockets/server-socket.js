var net = require('net');

var server = net.createServer(function(socket){
    console.log('Client connected');
    socket.write('Hello from server');
    
    socket.on('end', function(){
        console.log('Cliend desconected');
    });
    socket.on('data', function(data){
        console.log('Client send: ' + data.toString());
    });
});

server.listen(8080, '127.0.0.1');
console.log('server on');

//server capture connection, data sent from CLIENT and client desconected from port and ip
//server must be ON before client connect