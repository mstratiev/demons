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
// var terst = [[{ title: '#prideandprejudice: National spirit - Trailer',
//      description: 'What makes your home country what it is? Meet a former neo-Nazi, a man campaigning for the independence of his state and a woman displaced by civil conflict as they struggle to define what home means to them.',
//      summary: 'same',
//      date: 'Fri Dec 18 2015 18:10:00 GMT+0200 (FLE Standard Time)',
//      pubdate: 'Fri Dec 18 2015 18:10:00 GMT+0200 (FLE Standard Time)',
//      pubDate: 'same',
//      link: 'http://www.dw.com/en/prideandprejudice-national-spirit-trailer/a-18928233?maca=en-rss-en-world-4025-rdf',
//      guid: 'same',
//      author: null,
//      comments: null,
//      origlink: null,
//      image: {},
//      source: {},
//      categories: [Object],
//      enclosures: [],
//      'rdf:@': [Object],
//      'rdf:title': [Object],
//      'rdf:link': [Object],
//      'rdf:description': [Object],
//      'dc:date': [Object],
//      'dc:subject': [Object],
//      'dc:language': [Object],
//      'dwsyn:contentid': [Object],
//      meta: [Object] } ] ];

module.exports = new Interpreter();
