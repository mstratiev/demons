var MasterControl = (function() {

    var _ = require('lodash');

    var MasterControl = function() {
        this.reader = require('./reader');
        this.writer = require('./writer');
        this.interpreter = require('./interpreter');
        this.cleaner = require('./post-cleaner');
        this.posts = [];
        this.date = new Date("01.05.2016");
        return this;
    };

    MasterControl.prototype.init = function() {
        //read DB json file
        var self = this;
        var p = new Promise(function(resolve, reject) {
            self.writer.readJSON('news.json', function(err, json) {
                if (err) {
                    console.log(err)
                } else {
                    self.posts = json;
                    resolve(true);
                }
            })
        })
        return p;
    };

    MasterControl.prototype.readNewPosts = function() {
        var self = this;
        var p = new Promise(function(resolve, reject) {

            //get new RSS and update self.posts
            self.reader.readAll().then(function(resa) {
                console.log('Reader is reading new posts');
                var res = self.interpreter.sorta(resa);
                var pp;
                res.forEach(function(post) {
                        if (Array.isArray(post)) {
                            post.forEach(function(p) {
                                pp = self.cleaner.clean(p);
                                if (self.posts.indexOf(pp) < 0) {
                                    self.posts.push(pp);
                                }
                            })
                        }
                    })
                    //-----------updating the JSON DB
                    //self.renewNewsJSON()
                resolve(self.posts);
            });
        });
        return p;
    };

    ///----------------------THIS IS CALLED IN APP.JS----------------
    MasterControl.prototype.returnCurrentPosts = function() {
        var self = this;
        var date = new Date();

        var p = new Promise(function(resolve, reject) {
            if (date - self.date > 600000) {
                console.log("new date update")
                self.date = date;
                //get more posts
                self.readNewPosts().then(function(res) {
                    resolve(res);
                }, function(err) {
                    console.log("error in MasterControl, returnCurrentPosts" + err)
                });
            } else {
                //return current posts
                resolve(self.posts);
            }
        })
        return p;
    };

    MasterControl.prototype.renewNewsJSON = function() {
        var self = this;
        self.writer.readJSON('news.json', function(err, json) {
            var j = json;
            if (err) {
                console.log(err);
                return;
            } else {
                self.posts.forEach(function(item) {
                    if (j.indexOf(item) < 0) {
                        j.push(item);
                    }
                });
                self.writer.writeJSON('news.json', j, function(err, res) {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        console.log('Successfully renewed JSON')
                    }
                })
            }
        })

    };

    return MasterControl;
})();

module.exports = new MasterControl();