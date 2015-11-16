var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(__dirname + '/build'))


var port = 3000;

app.get('/', function(req, res){
	res.sendFile(path.resolve(__dirname, 'build/index.html'))
});


app.listen(port, function(){
	console.log('serving at port ' + port);
});