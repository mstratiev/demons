var postController = (function() {
    var getAll = function(context) {
        data.news.get().then(function(res) {
            templates.get('deamons').then(function(template) {
                var os = {
                    posts: []
                };
                res.forEach(function(o) {
                        o.description = o.description.replace(/(<[\s\S]+>)/g, '');
                        o.dateFormated = moment(o.date).format("Do MMM YYYY");
                        os.posts.push(o);
                    })
                    //------------------------------------
                    //console.log(os)
                data.demon.check().then(function(demon) {
                    os.demon = demon;
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

    var getByDemon = function(context, demon) {
        data.news.getByDemon(demon).then(function(res) {
            templates.get('demons').then(function(template) {
                context.$element().html(template(res))
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
                things: ["lust", "sex", "affair"]
            }, {
                name: "Lucifer",
                things: ["pride", "president", "minister", "prize", "sanction"]
            }, {
                name: "Mammon",
                things: ["greed", "corruption", "bribe", "money", "award", "cash", "valuable", "rare", "sanction", "gold", "revenue", "rob"]
            }, {
                name: "Leviathan",
                things: ["envy", "celebrity", "celebrities", "migrants", "border"]
            }, {
                name: "Satan",
                things: ["wrath", "threat", "soldier", "battle", "terror", "terrified", "bomb", "attack", "kill", "alert", "war ", "nazi", "missle", "fight", "impact", "armed"]
            }]
        };

        templates.get('descriptions').then(function(template) {
            context.$element().html(template(daemons))
        })
    };



    return {
        all: getAll,
        abstract: getAbstract,
        demons: getDemons
    }
})();
