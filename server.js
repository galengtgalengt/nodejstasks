var http = require('http');

var eventOne = new eventInstance('foo', 'bar', 'cat', 'dog');

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
	this.date = date;
	this.amountRaised = amountRaised;
	this.toJson = function() {
		return JSON.stringify(this)
	};
}
eventInstance.prototype = new eventType();

