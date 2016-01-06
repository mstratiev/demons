(function() {
    var sammyApp = Sammy('#content', function() {
        var $content = $('#content');
        this.get('#/', function() {
            this.redirect('#/home')
        });
        this.get('#/home', postController.all);
        this.get('#/abstract', postController.abstract);
        this.get('#/demons', postController.demons);
    })
    sammyApp.run('#/');
}())
