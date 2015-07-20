var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.use(function(req, res, next) {
    console.log("That's my first middleware");
    next();
}).use(function(req, res, next) {  
    console.log("That's my second middleware");    
    next();  
})  .use(function(req, res, next) {  
    console.log("end");    
    res.end("hello world");  
}); 

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
