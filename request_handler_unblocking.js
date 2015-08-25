var exec = require('child_process').exec;
function start(response){
console.log("Requesthandler 'start' was called.");
var content="empty";
exec("ls -lRta /",{timeout: 10000, maxBuffer: 200000*1024}, function(error,stdout,stderr){
response.writeHead(200,{"Content-Type":"text/plain"});
response.write(stdout);
response.end();
});
}
function upload(response){
console.log("Requesthandler 'upload' was called.");
response.writeHead(200,{"Content-Type":"text/plain"});
response.write('Hello Upload');
response.end();
}
exports.start=start;
exports.upload=upload;
