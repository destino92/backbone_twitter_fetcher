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
