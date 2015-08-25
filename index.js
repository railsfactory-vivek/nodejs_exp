//var ser=require('./server');
//var ser=require('./server_post_data');
var ser=require('./server_img_upload');
//var route=require('./route_post_data');
var route=require('./route_img_upload');
//var requestHandlers=require("./request_handler_post");
var requestHandlers=require("./request_handler_img_upload.js");
var handle={}
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle['/show']=requestHandlers.show;
ser.start_ser(route.route, handle);
