var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
  // res.render('index', { title: 'Express' });
  // var fileContents = fs.readFileSync('./data.txt', 'utf-8')
fs.readFile('data.txt', function(err, data){
	router.get('/', function(req, res, next) {

  	res.header('Content-Type', 'text/html');
	res.send(data);
  	
  })
  // console.log(fileContents)
});

module.exports = router;
