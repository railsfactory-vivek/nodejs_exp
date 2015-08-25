var http=require("http");
var url=require('url');
function start_ser(route, requests) {
http.createServer(function(request,response){
var pathname=url.parse(request.url).pathname;
console.log("Request for "+pathname+" received.");
request.setEncoding("utf8");
var postData = '';
request.addListener("data",function(postDataChunk){
postData+=postDataChunk;
console.log("ReceivedPOSTdatachunk'"+ postDataChunk+"'.");
});
request.addListener("end",function(){
route(requests,pathname,response,postData);
});
}).listen(8888);

console.log('Server has started');
}

exports.start_ser= start_ser;
