var fs = require('fs');


var Writer = (function() {

    var fs = require('fs');

    var Writer = function() {
        this.__dir = './db/';
        return this;
    };

    Writer.prototype.append = function(file, content) {
        var self = this;
        var promise = new Promise(function(resolve, reject) {
            fs.readFile(file, function(err, data) {
                if (!err && data) {
                    content += data;
                    fs.writeFile(file, content, function(err) {
                        if (err) {
                            console.log("Error in writer" + err);
                        }
                        resolve();
                    })
                }
            });
        })
        return promise;
    };

    Writer.prototype.prepend = function(file, content) {
        var self = this;
        var promise = new Promise(function(resolve, reject) {
            fs.readFile(file, function(err, data) {
                if (!err && data) {
                    var dat = data + content;
                    fs.writeFile(file, dat, function(err) {
                        if (err) {
                            console.log("Error in writer" + err);
                        }
                        resolve();
                    })
                }
            });
        })
        return promise;
    };

    Writer.prototype.parse = function(file) {
        var self = this;
        var promise = new Promise(function(resolve, reject) {
            fs.readFile(file, function(err, data) {
                if (!err && data) {
                    var dat = '[' + data + ']';
                    var json = JSON.parse(dat);
                    resolve(json);
                }
            });
        })
        return promise;
    };

    Writer.prototype.read = function(file) {
        var self = this;
        var promise = new Promise(function(resolve, reject) {
            fs.readFile(file, function(err, data) {
                if (!err && data) {
                    resolve(data);
                }
            });
        })
        return promise;
    };

    Writer.prototype.readJSON = function(file, callback) {
        var self = this;

        try {
            fs.readFile(self.__dir + file, function(err, data) {
                if (err) {
                    console.log(err);
                    //callback(err, null)
                }
                if (!err && data) {
                    callback(null, JSON.parse(data));
                }
            })
        } catch (e) {
            console.log("Error in writer " + e)
            callback(e, null)
        }

    };


    Writer.prototype.writeJSON = function(file, data, callback) {
        var self = this;
        var toWrite = JSON.stringify(data);
        try {
            fs.writeFile(self.__dir + file, toWrite, 'utf-8', function(err) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, true);
                }
            })
        } catch (e) {
            console.log("Error in writer " + e)
            callback(e, null);
        }
    };


    return Writer;
}());

module.exports = new Writer();
