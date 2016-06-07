var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var Twit = require("twit");

var client = null;

function connectToTwitter(){
	client = new Twit({
		consumer_key: 	 	  : "i3RiI98UbCZ2bqXvF4cj8Isq2",
		consumer_secret: 	  : "RKz4AoAZNWVpIkHyJRqRq7amqMua2gyx0tHguA09FjUp1nEP96",
		access_token:    	  : "1479941042-AaMekNKGGsW2U7pvSSc8g7uD4E0r5OepCnVtE8l",
		access_token_secret:  : "tWdOHxqkCFk8XnhKTdT2ruDyp92IEpFwEUFRCSu0jhTxF"
	})
}

//Make the client connect to Twitter
connectToTwitter();
//Additional code to allow CORS requests
//Additional setup to allow CORS requests
var allowCrossDomain = function(req, response, next) {
	response.header('Access-Control-Allow-Origin', "http://localhost");
	response.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	if('OPTIONS' == req.method){
		response.send(200);
	} else {
		next();
	}
};
app.use(allowCrossDomain);
// Parses the JSON object given in the body request
app.use(bodyParser());
// Return the Twitter timeline of the current user
app.get('/timeline', function(request, response){
	response.header('Access-Control-Allow-Origin','*');
	client.get('statuses/home_timeline', {}, function(err, reply){
		if(err){
			response.send(404);
		}
		if(reply){
			response.json(reply);
		}
	});
});

app.get('/profile', function(request, response){
	response.header('Access-Control-Allow-Origin', '*');
	client.get('users/show', {screen_name: 'DestinoDello'}, function(err, reply){
		if(err){
			console.log('Error: ' + err);
			response.send(404);
		}
		if(reply){
			console.log('Reply: ' + reply);
			response.json(reply);
		}
	});
});