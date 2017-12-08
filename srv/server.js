var app = require('express')();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer);
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res){
	res.end();
});

app.post('/rooms', function(req, res){
	console.log('POST: /rooms');
	res.end();
});

app.listen(8000);