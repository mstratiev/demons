var data = (function() {
    var COOKIE_NAME = 'daemon';

    function setDeamon(dem) {
        cookie.set(COOKIE_NAME, dem, 0.01);
    }

    function getDeamon() {
        return cookie.get(COOKIE_NAME);
    }

    function removeDeamon() {
        cookie.remove(COOKIE_NAME);
    }


    function rnd(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

    function newDeamon() {
        var demons = ['Asmodeus', 'Lucifer', 'Mammon', 'Leviathan', 'Satan', 'Belphegor','Beelzebub'];
        var len = demons.length -1;
        return demons[rnd(0,len)];
    }


    var getNews = function() {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: '/posts',
                method: "GET",
                data: {},
                success: function(res) {
                    resolve(res)
                },
                error: function(err) {
                    console.log(err)
                }
            })

        })
        return promise
    };
    /*
    var getByDemon = function(demon) {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: '/posts/' + demon,
                method: "GET",
                data: {},
                success: function(res) {
                    resolve(res)
                },
                error: function(err) {
                    console.log(err)
                }
            })

        })
        return promise
    };
*/
/*
    var getDaily = function() {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: '/...',
                method: "GET",
                data: {},
                success: function(res) {
                    resolve(res)
                },
                error: function(err) {
                    console.log(err)
                }
            })

        })
        return promise
    };
*/


    var checkDeamon = function() {
        var promise = new Promise(function(resolve, reject) {
            var dem = getDeamon();
            if (!dem) {
                dem = newDeamon();
                setDeamon(dem);
            }
            resolve(dem);
        })

        return promise

    };

    return {
        news: {
            get: getNews/*,
            getByDemon: getByDemon,
            getDaily: getDaily*/
        },
        demon: {
            check: checkDeamon
        }
    }
})();
