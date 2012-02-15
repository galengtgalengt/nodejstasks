function eventType(type, description) {
	this.type = type;
	this.description = description;
	this.toJson = function() {
		return JSON.stringify(this)
	};
};

function eventInstance(type, description, date, amountRaise) {
	this.date = date;
	this.amountRaised = amountRaised;
}
eventInstance.prototype = new eventType();

