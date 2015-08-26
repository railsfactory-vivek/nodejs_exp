var querystring=require("querystring");
var http=require('http'),
util = require('util');
function start_ser() {
http.createServer(function(req,res){
var postData='';
req.addListener("data",function(postDataChunk){
postData+=postDataChunk;
});
req.addListener("end",function(){
var response_data=querystring.parse(postData);
process_data(req, res, response_data);
});
}).listen(8888);

console.log('Server has started');
}

function process_data(req, res, data) {
res.writeHead(200,{'content-type':'text/html'});
if(req.url=='/validate' && req.method.toLowerCase()=='post'){
if(data.username != 'vivek')
{
res.write('Invalid username');
} else if(data.password != 'password') {
res.write('Invalid password');
} else if(data.username == 'vivek' && data.password == 'password') {
res.write('Welcome!\nReceived data:\n\n' + 'Username:' + data.username + ' & Password:' + data.password);
res.end();
return;
}
}
res.end(
'<form action="/validate" method="post">'+
'<label>Enter Username:</label>'+
'<input type="text" name="username"><br>'+
'<label>Enter Password:</label>'+
'<input type="password" name="password"/><br>'+
'<input type="submit" value="Submit">'+
'<input type="reset" value="Clear">'+
'</form>'
);
}

start_ser();
