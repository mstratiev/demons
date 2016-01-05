'use strict'

var _ = require('lodash');
var demonsJSON = require('./demonsJSON.js');


var Interpreter = (function() {
    var Interpreter = function() {
        this.daemons = demonsJSON;
        return this;
    };

    Interpreter.prototype.interprete = function(post, demonArr) {
        var temp = (post.title + ' ' + post.description).toLowerCase();
        if (!Array.isArray(demonArr)) {
            demonArr = [];
        }
        var count = 0;
        _.each(demonArr, function(word) {
            if (temp.indexOf(word) >= 0) {
                count += 1;
            }
        });
        return count;
    };

    Interpreter.prototype.sorta = function(news) {
        var self = this;
        if (!Array.isArray(news)) {
            console.log('shitass')
            news = [];
        }

        news.forEach(function(gr) {
            gr.forEach(function(post) {
                _.each(self.daemons, function(words, demon) {
                    post[demon] = self.interprete(post, words)
                })
            })
        })
        return news;
    };
    Interpreter.prototype.currentDemon = function(demon) {
        var self = this;
        
    };

    return Interpreter;
})();

module.exports = new Interpreter();
