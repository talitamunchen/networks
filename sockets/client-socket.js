var net = require('net');

var socket = net.Socket();
console.log('Connecting with server');
socket.on('data', function(data){
    console.log('Server send: ' + data.toString());
});

socket.connect(8080, '127.0.0.1');


setTimeout(function() {
    socket.write('Hello from client');
    socket.end(); //kill connection
}, 3000);

//connect to server, if server send somenthing write the data from server and send data to server