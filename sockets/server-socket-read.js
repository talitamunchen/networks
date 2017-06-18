var fs = require("fs");
var net = require('net');

var getFileName = function(data){
	var headers = data.split("\n");
	var recParts = headers[0].split(" ");
	//console.log(headers);
	//console.log("Request: " + recParts[1]);
	return recParts[1];
}

var sendHeader = function(clientSocket, statusCode){
	if(statusCode == 200){
		clientSocket.write("HTTP/1.1 200 OK\r\n");
	}else if (statusCode == 404){
		clientSocket.write("HTTP/1.1 404 NOT FOUND\r\n");
	}
	clientSocket.write("Server: Talita/1.0.0 (WIN10)\r\n");
	clientSocket.write("Connection: close\r\n");
	//clientSocket.write("Content-Type: image/jpeg;\r\n");
	clientSocket.write("\r\n");
}

var sendNotFound = function(clientSocket){
	fs.readFile("./notFound.html", "utf8", function (err, data){	
		sendHeader(clientSocket, 404);
		clientSocket.write(data);
		clientSocket.destroy();
	});
}

var server = net.createServer(function(clientSocket){
    console.log('Client connected');

    clientSocket.on('data', function(data){
        //console.log('Client sent: ' + data.toString());
		var fileName = getFileName(data.toString());
		fs.readFile("." + fileName, function (err, fileData){
			if (err){
				sendNotFound(clientSocket);
				return console.log(err); //error
			}
			sendHeader(clientSocket, 200);
			clientSocket.write(fileData);
			clientSocket.destroy();
		});
    });
});

server.listen(8080, '127.0.0.1');
console.log('server on');

