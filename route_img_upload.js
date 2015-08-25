function route(handle, pathname, reponse, request){
console.log("About to route a request for "+pathname);
if(typeof handle[pathname] == "function") {
return handle[pathname](reponse, request);
} else {
console.log("undefined function for "+ pathname);
return "not found";
}
}
exports.route=route;
