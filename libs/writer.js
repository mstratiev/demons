var fs = require('fs');


var Writer = (function() {

    var Writer = function() {

    };

    Writer.prototype.append = function(file, content, callback) {
        fs.readFile(file, function(err, data) {
            if (!err && data) {
                content += data;
                fs.writeFile(file, content, function(err) {
                    if (err) {
                        console.log("Error in writer" + err);
                    }
                    return callback();
                })

            }

        });
    };

    Writer.prototype.prepend = function(file, content, callback) {
        fs.readFile(file, function(err, data) {
            if (!err && data) {
                var dat = data + content;
                fs.writeFile(file, dat, function(err) {
                    if (err) {
                        console.log("Error in writer" + err);
                    }
                    return callback();
                })

            }

        });
    };

    Writer.prototype.parse = function(file, callback) {
        fs.readFile(file, function(err, data) {
            if (!err && data) {
                var dat = '[' + data + ']';
                var json = JSON.parse(dat);
                return callback(null, json);
            }

        });
    };

    Writer.prototype.read = function(file, callback) {
        fs.readFile(file, function(err, data) {
            if (!err && data) {
                return callback(null, data);
            }

        });
    };

    return Writer;
}());


module.exports = new Writer();
