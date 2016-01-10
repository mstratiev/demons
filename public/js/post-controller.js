var postController = (function() {
    var demonsArr = ["Asmodeus",
        "Lucifer",
        "Mammon",
        "Leviathan",
        "Satan"
    ];

    var getDemon = function(context, _, dem) {
        data.news.get().then(function(res) {
            templates.get('deamons').then(function(template) {
                var os = {
                    posts: res
                };
                data.demon.check().then(function(demon) {
                    os.demon = demon;
                    if(dem){
                        demon = dem;
                        os.demon = dem;
                    }
                    os.posts.forEach(function(o) {
                        //o.description = o.description.replace(/(<[\s\S]+>)/g, '');
                        o.dateFormated = moment(o.date).format("Do MMM YYYY");
                        os.posts.push(o);
                    })
                    var os2 = {
                        demon: demon,
                        posts: []
                    };
                    os.posts.forEach(function(item) {
                            if (item[demon]) {
                                os2.posts.push(item)
                            }
                        })
                        //-------------------------------
                        //console.log(os2)

                    context.$element().html(template(os2))
                })
            })
        })
    };

    var getAllNegativePosts = function(context) {

        var os = {posts:[]};
        var demLen = demonsArr.length;
        var i;

        templates.get('deamons-with-count').then(function(template) {
            data.news.get().then(function(news) {
                news.forEach(function(n) {

                    for(i = 0; i<demLen; i+=1){
                        dem = demonsArr[i];
                        if(n[dem]){
                            n.dateFormated = moment(n.date).format("Do MMM YYYY");
                            os.posts.push(n);
                            break;
                        }
                    }
                })
                context.$element().html(template(os))
            })

            

        })

    };
    
    var getDaily = function(context) {
        data.news.getDaily().then(function(res) {
            templates.get('demons').then(function(template) {
                context.$element().html(template(res))
            })
        })
    };

    var getAbstract = function(context) {
        templates.get('abstract').then(function(template) {
            context.$element().html(template)
        })
    };

    var getDemons = function(context) {
        var daemons = {
            demons: [{
                name: "Asmodeus",
                things: ["lust", "sex", "affair", "rape", "sexual assault"]
            }, {
                name: "Lucifer",
                things: ["pride", "president", "minister", "prize", "sanction"]
            }, {
                name: "Mammon",
                things: ["greed", "corruption", "bribe", "money", "award", "cash", "valuable", "rare", "sanction", "gold", "revenue", "rob", "addiction"]
            }, {
                name: "Leviathan",
                things: ["envy", "celebrity", "celebrities", "migrants", "border", "suicide"]
            }, {
                name: "Satan",
                things: ["wrath", "threat", "soldier", "battle", "terror", "terrified", "bomb", "attack", "assault", "kill", "alert", "war ", "nazi", "missle", "fight", "impact", "armed"]
            }]
        };

        templates.get('descriptions').then(function(template) {
            context.$element().html(template(daemons))
        })
    };



    return {
        getDemon: getDemon,
        abstract: getAbstract,
        demons: getDemons,
        all: getAllNegativePosts
    }
})();
