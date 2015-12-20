var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");


var app = express();

/////MIDDLEWARE//////

app.use(bodyParser.urlencoded({ extended: true }));//extended: false would only allow a string to pass through, true will allow anything like images, videos and strings.
app.use(bodyParser.json());
app.use(morgan("dev"));//log all the requests to the console.


app.listen(config.port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("listening on port" ,config.port);
	}
});