var http=require("http");
var url=require('url');
function start_ser(route, requests) {
http.createServer(function(request,response){
var pathname=url.parse(request.url).pathname;
console.log("Request for "+pathname+" received.");
var content=route(requests, pathname);
console.log('request received and response'+ content);
response.writeHead(200,{"Content-Type":"text/plain"});
response.write(content);
response.end();
}).listen(8888);

console.log('Server has started');
}

exports.start_ser= start_ser;
