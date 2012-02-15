var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(eventOne.toJson());
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
console.log(eventOne);


function eventType(type, description) {
	this.type = type;
	this.description = description;
	this.toJson = function() {
		return JSON.stringify(this)
	};
};

function eventInstance(type, description, date, amountRaised) {
	this.type = type;
	this.description = description;
	this.date = date;
	this.amountRaised = amountRaised;
}
eventInstance.prototype = new eventType();

var eventOne = new eventInstance('foo', 'bar', 'cat', 'dog');