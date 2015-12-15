var Reader = (function() {

    var request = require('request');
    var FeedParser = require('feedparser');


    function Reader() {
        this.sites = ['http://rss.cnn.com/rss/edition.rss',
            'http://rss.cnn.com/rss/edition_europe.rss',
            'http://feeds.bbci.co.uk/news/rss.xml',
            'http://rss.dw.de/rdf/rss-en-top',
            'http://rss.dw.de/rdf/rss-en-world'
        ];
        this.news = [];
    };

    Reader.prototype.read = function(site) {
        var self = this;
        var feedparser = new FeedParser();
        var req = request(site);
        req.setMaxListeners(50);
        req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');

        var promise = new Promise(function(resolve, reject) {
        req.on('response', function(res) {
            var stream = this;
            if (res.statusCode != 200) {
                return this.emit('error', new Error('Bad status code'));
            }
            stream.pipe(feedparser);
        });

        feedparser.on('error', function(error) {
            console.log('There is an arror in reader ' + error)
            reject(error)
        });
        var items = [];
        feedparser.on('readable', function() {
            // This is where the action is!
            var self = this;
                var stream = self,
                    meta = self.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
                    ,
                    item;
                while (true) {
                    item = stream.read();
                    if (item) {
                        items.push(item);
                    }else if (!item) {
                        feedparser = null;
                        delete feedparser;
                        resolve(items);
                        break;
                    }
                }
            });
            
        });
        return promise;
    };


    Reader.prototype.readAll = function() {
        var self = this;
        var news = [];
        this.sites.forEach((site) => {
                news.push(self.read(site))
        });

        return Promise.all(news);
    };


    Reader.prototype.store = function(stuff) {
        if (!Array.isArray(stuff)) {
            stuff = [stuff];
        }
        var self = this;
        stuff.forEach((item) => {
            if (self.news.indexOf(item) < 0) {
                self.news.push(item);
            }
        });


    };
    return Reader;

})();


module.exports = new Reader();
