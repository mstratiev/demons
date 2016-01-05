var MasterControl = (function() {

    var MasterControl = function() {
        this.reader = require('./reader');
        this.writer = require('./writer');
        this.interpreter = require('./interpreter');
        this.storer = require('./storer');
        this.date = new Date().getDate();
        this.posts = [];
        return this;
    };



    MasterControl.prototype.init = function() {


    };

    MasterControl.prototype.readAllPosts = function() {
        var self = this;
        var p = new Promise(function(resove, reject) {
            self.reader.readAll().then(function(res) {
                res.forEach(function(post) {
                    if (Array.isArray(post)) {
                        post.forEach(function(p) {
                            self.posts.push(p)
                        })
                    }
                })
                resove(res);
            });
        });
        return p;
    };

    MasterControl.prototype.returnCurrentPosts = function(date) {
        var self = this;
        var p = new Promise(function(resolve, reject) {
            if (date != self.date) {
                self.date = new Date().getDate();
                self.readAllPosts().then(function(res) {
                    resolve(res)
                }, function(err) {
                    console.log("error in MasterControl, returnCurrentPosts" + err)
                });
            } else {

                resolve(self.posts);
            }
        })
        return p;
    };

    MasterControl.prototype.interprete = function() {
        var self = this;
        console.log('here')
        var p = new Promise(function(resolve, reject) {
            self.returnCurrentPosts().then(function(res) {
                var result = self.interpreter.sorta(res);
                resolve(result);
            }, function(err) {
                console.log("error in MasterControl, interprete" + err)
                reject(err);
            })
        })

        return p;
    };


    return MasterControl;
})();

module.exports = new MasterControl();


var m = new MasterControl();
m.returnCurrentPosts().then(function(re) {
    //console.log(re)
})
m.interprete().then(function(res) {
    //console.log(res)
}, function(err) {
    console.log("error in MasterControl, returnCurrentPosts" + err)
});
