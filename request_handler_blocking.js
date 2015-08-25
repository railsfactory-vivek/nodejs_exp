function start(){
console.log("Requesthandler 'start' was called.");
function sleep(milliSeconds){
var startTime=new Date().getTime();
while(new Date().getTime() < startTime+milliSeconds);
}
sleep(10000);
return 'Hello start';
}
function upload(){
console.log("Requesthandler 'upload' was called.");
return 'Upload';
}
exports.start=start;
exports.upload=upload;
