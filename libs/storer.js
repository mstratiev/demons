var Storer = (function() {
    var Storer = function() {
    	this.storage = [];
    	this.jsonStorage = [];
    	this.txtStorage = [];
    	this.array = [];
    };

    Storer.prototype.store = function(json) {
    	this.storage = json;
    };

    Storer.prototype.push = function(item){
    	this.array.push(item);
    }

    return Storer;
});

module.exports = new Storer();
