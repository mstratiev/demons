var express = require('express');
var app = express();
var MasterControl = require('./libs/master-ctrl');


app.use(express.static('public'));

app.get('/', function (req, res) {
	console.log('Request to Index')
  res.send('index.html');
});

app.get('/posts', function (req, res){
	console.log('Request to /posts')
	MasterControl.returnCurrentPosts().then(function(ress){
		res.send(ress)}, function(err){
			res.send(err)
		})
});

app.get('/posts/:demon', function (req, res){
	res.send('Requesting daily posts by '+ req.params.demon);
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Humanity d(a)emons is listening at http://%s:%s', host, port);
});


//http://expressjs.com/en/4x/api.html