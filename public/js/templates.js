var templates = (function() {
    function get(name) {
        var url = 'templates/' + name + '.handlebars';
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: url,
                type: 'GET',
                success: function(html) {
                    var template = Handlebars.compile(html);
                    resolve(template);
                },
                error: function(err) {
                    toastr.error(err);
                    reject(err);
                }
            })
        })
        return promise;
    }
    return {
        get: get
    }
})();
