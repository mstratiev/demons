(function() {
    var sammyApp = Sammy('#content', function() {
        var $content = $('#content');
        this.get('#/', function() {
            this.redirect('#/home')
        });
        this.get('#/home', postController.all)
    })
    sammyApp.run('#/');
}())
