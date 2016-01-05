var data = (function() {
    var COOKIE_NAME = 'daemon';

    function setDeamon(sessionKey) {
        cookie.set(COOKIE_NAME, sessionKey, 1);
    }

    function getDeamon() {
        return cookie.get(COOKIE_NAME);
    }

    function removeDeamon() {
        cookie.remove(COOKIE_NAME);
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
    var getByDemon = function(demon) {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: '/posts/'+ demon,
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


    return {
        news: {
            get: getNews,
            getByDemon: getByDemon,
            getDaily: getDaily
        }
    }
})();
