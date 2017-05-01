var fs = require("fs");
var net = require('net');

var server = net.createServer(function(socket){
    console.log('Client connected');
	fs.readFile("./trabalho.txt", "utf8", function (err, data){
		if (err){
		    return console.log(err); //error
		}
		socket.write(data);

		socket.destroy();
		server.close(function () {
			console.log('Server closed.');
			server.unref();
		});
	});

   /* socket.on('end', function(){
        console.log('Cliend desconected');
    });
    socket.on('data', function(data){
        console.log('Client send: ' + data.toString());
    });*/
});

server.listen(8080, '127.0.0.1');
console.log('server on');

