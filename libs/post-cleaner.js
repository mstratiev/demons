var Cleaner = (function() {
    var Cleaner = function() {

    };

    Cleaner.prototype.clean = function(item) {
        return {
            title: item.title,
            description: item.description.replace(/(<[\s\S]+>)/g, ''),
            date: item.date,
            copyright: item.meta.copyright,
            Asmodeus: item.Asmodeus,
            Beelzebub: item.Beelzebub,
            Belphegor: item.Belphegor,
            Lucifer: item.Lucifer,
            Mammon: item.Mammon,
            Leviathan: item.Leviathan,
            Satan: item.Satan
        }
    };


    Cleaner.prototype.cleanAll = function(news) {
        var self = this;
        var temp = [];
        if (!Array.isArray(news)) {
            console.log("Cleaner needs an array of news!!")
        }
        news.forEach(function(it, i) {
            temp[i] = self.clean(it);
        })

        return temp;
    };
    return Cleaner;
})();




module.exports = new Cleaner();





/*

var c = new Cleaner();

var testJSON = {
    title: 'Cubans heading to U.S. from Costa Rica',
    description: 'It\'s a rare deal at a time when daily sparring over immigration is a worldwide reality.<br clear=\'all\'/><br/><br/><a href="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/1/rc.htm" rel="nofollow"><img src="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/1/rc.img" border="0"/></a><br/><br/><a href="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/2/rc.htm" rel="nofollow"><img src="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/2/rc.img" border="0"/></a><br/><br/><a href="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/3/rc.htm" rel="nofollow"><img src="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/3/rc.img" border="0"/></a><br/><br/><a href="http://da.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2.htm"><img src="http://da.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2.img" border="0"/></a><br/><a href="http://adchoice.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/ach.htm"><img src="http://adchoice.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/ach.img" border="0"/></a><img width="1" height="1" src="http://pi.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2t.img" border="0"/><img width="1" height="1" src="http://pi2.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2t2.img" border="0"/><img width=\'1\' height=\'1\' src=\'http://rss.cnn.com/c/35494/f/676993/s/4cb045e0/sc/7/mf.gif\' border=\'0\'/>',
    summary: 'It\'s a rare deal at a time when daily sparring over immigration is a worldwide reality.<br clear=\'all\'/><br/><br/><a href="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/1/rc.htm" rel="nofollow"><img src="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/1/rc.img" border="0"/></a><br/><br/><a href="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/2/rc.htm" rel="nofollow"><img src="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/2/rc.img" border="0"/></a><br/><br/><a href="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/3/rc.htm" rel="nofollow"><img src="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/3/rc.img" border="0"/></a><br/><br/><a href="http://da.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2.htm"><img src="http://da.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2.img" border="0"/></a><br/><a href="http://adchoice.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/ach.htm"><img src="http://adchoice.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/ach.img" border="0"/></a><img width="1" height="1" src="http://pi.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2t.img" border="0"/><img width="1" height="1" src="http://pi2.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2t2.img" border="0"/><img width=\'1\' height=\'1\' src=\'http://rss.cnn.com/c/35494/f/676993/s/4cb045e0/sc/7/mf.gif\' border=\'0\'/>',
    date: 'Thu Jan 07 2016 00:17:16 GMT+0200 (FLE Standard Time)',
    pubdate: 'Thu Jan 07 2016 00:17:16 GMT+0200 (FLE Standard Time)',
    pubDate: 'Thu Jan 07 2016 00:17:16 GMT+0200 (FLE Standard Time)',
    link: 'http://rss.cnn.com/c/35494/f/676993/s/4cb045e0/sc/7/l/0Ledition0Bcnn0N0C20A160C0A10C0A50Cus0Ccuban0Eimmigrants0Cindex0Bhtml0Deref0Fedition/story01.htm',
    guid: 'http://edition.cnn.com/2016/01/05/us/cuban-immigrants/index.html',
    author: null,
    comments: null,
    origlink: null,
    image: {
        url: 'http://i2.cdn.turner.com/cnn/dam/assets/151210205844-costa-rica-nicaragua-cuba-migration-top-tease.jpg'
    },
    source: {},
    categories: [],
    enclosures: [{
        url: 'http://i2.cdn.turner.com/cnn/dam/assets/151210205844-costa-rica-nicaragua-cuba-migration-top-tease.jpg',
        type: 'image/jpeg',
        length: null
    }],
    'rss:@': {},
    'rss:title': {
        '@': {},
        '#': 'Cubans heading to U.S. from Costa Rica'
    },
    'rss:link': {
        '@': {},
        '#': 'http://rss.cnn.com/c/35494/f/676993/s/4cb045e0/sc/7/l/0Ledition0Bcnn0N0C20A160C0A10C0A50Cus0Ccuban0Eimmigrants0Cindex0Bhtml0Deref0Fedition/story01.htm'
    },
    'rss:description': {
        '@': {},
        '#': 'It\'s a rare deal at a time when daily sparring over immigration is a worldwide reality.<br clear=\'all\'/><br/><br/><a href="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/1/rc.htm" rel="nofollow"><img src="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/1/rc.img" border="0"/></a><br/><br/><a href="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/2/rc.htm" rel="nofollow"><img src="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/2/rc.img" border="0"/></a><br/><br/><a href="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/3/rc.htm" rel="nofollow"><img src="http://rc.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/rc/3/rc.img" border="0"/></a><br/><br/><a href="http://da.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2.htm"><img src="http://da.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2.img" border="0"/></a><br/><a href="http://adchoice.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/ach.htm"><img src="http://adchoice.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/ach.img" border="0"/></a><img width="1" height="1" src="http://pi.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2t.img" border="0"/><img width="1" height="1" src="http://pi2.feedsportal.com/r/247387288231/u/192/f/676993/c/35494/s/4cb045e0/sc/7/a2t2.img" border="0"/><img width=\'1\' height=\'1\' src=\'http://rss.cnn.com/c/35494/f/676993/s/4cb045e0/sc/7/mf.gif\' border=\'0\'/>'
    },
    'rss:pubdate': {
        '@': {},
        '#': 'Wed, 06 Jan 2016 22:17:16 GMT'
    },
    'rss:guid': {
        '@': {
            ispermalink: 'false'
        },
        '#': 'http://edition.cnn.com/2016/01/05/us/cuban-immigrants/index.html'
    },
    'media:thumbnail': {
        '@': {
            url: 'http://i2.cdn.turner.com/cnn/dam/assets/151210205844-costa-rica-nicaragua-cuba-migration-top-tease.jpg',
            width: '90',
            height: '51'
        }
    },
    'media:content': {
        '@': {
            height: '51',
            lang: '',
            type: 'image/jpeg',
            width: '90',
            url: 'http://i2.cdn.turner.com/cnn/dam/assets/151210205844-costa-rica-nicaragua-cuba-migration-top-tease.jpg'
        }
    },
    meta: {
        '#ns': [
            [Object],
            [Object],
            [Object],
            [Object],
            [Object]
        ],
        '@': [
            [Object],
            [Object],
            [Object],
            [Object],
            [Object]
        ],
        '#xml': {
            version: '1.0',
            encoding: 'UTF-8'
        },
        '#type': 'rss',
        '#version': '2.0',
        title: 'CNN.com - Top Stories',
        description: 'CNN.com delivers up-to-the-minute news and information on the latest top stories, weather, entertainment, politics and more.',
        date: 'Thu Jan 07 2016 00:19:40 GMT+0200 (FLE Standard Time)',
        pubdate: 'Thu Jan 07 2016 00:19:40 GMT+0200 (FLE Standard Time)',
        pubDate: 'Thu Jan 07 2016 00:19:40 GMT+0200 (FLE Standard Time)',
        link: 'http://edition.cnn.com/index.html?eref=edition',
        xmlurl: null,
        xmlUrl: null,
        author: null,
        language: 'en-US',
        favicon: null,
        copyright: 'Copyright 2016 Cable News Network LP, LLLP.',
        generator: null,
        cloud: {},
        image: {
            url: 'http://i.cdn.turner.com/cnn/.e/img/1.0/logo/cnn.logo.rss.gif',
            title: 'CNN.com - Top Stories'
        },
        categories: [],
        'rss:@': {},
        'rss:title': {
            '@': {},
            '#': 'CNN.com - Top Stories'
        },
        'rss:link': {
            '@': {},
            '#': 'http://edition.cnn.com/index.html?eref=edition'
        },
        'rss:description': {
            '@': {},
            '#': 'CNN.com delivers up-to-the-minute news and information on the latest top stories, weather, entertainment, politics and more.'
        },
        'rss:language': {
            '@': {},
            '#': 'en-US'
        },
        'rss:copyright': {
            '@': {},
            '#': 'Copyright 2016 Cable News Network LP, LLLP.'
        },
        'rss:pubdate': {
            '@': {},
            '#': 'Wed, 06 Jan 2016 22:19:40 GMT'
        },
        'rss:lastbuilddate': {
            '@': {},
            '#': 'Wed, 06 Jan 2016 22:19:40 GMT'
        },
        'rss:ttl': {
            '@': {},
            '#': '5'
        },
        'rss:image': {
            '@': {},
            title: [Object],
            url: [Object],
            link: [Object],
            description: [Object]
        }
    },
    Asmodeus: 0,
    Lucifer: 0,
    Mammon: 1,
    Leviathan: 1,
    Satan: 0
};

var testArr = [];
testArr[0] = testJSON;

console.log(c.clean(testJSON))
console.log(c.cleanAll(testArr))
*/
