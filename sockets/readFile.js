// read a file from disk store in memory and print on the console
var fs = require("fs"); //module file system
var main = function(){
    console.log("Program begin...");
    //readFile(filePath, encode, function (err, data))
    fs.readFile("./texto.txt", "utf8", function (err, data){
        if (err){
            return console.log(err); //error
        }
        console.log(data); //print file content
        console.log("Program end!");
    });
}
main(); //invoke function

/*
require("fs").readFile("./texto.txt", "utf8", function (err, data){
    if (err){
        return console.log(err); //error
    }
    console.log(data);
});
*/