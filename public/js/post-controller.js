var postController = (function() {
	var getAll = function(context){
		data.news.get().then(function(res){
			templates.get('deamons').then(function(template){
				var os = {posts:[]};
				_(res).each(function(item){
					_(item).each(function(o){
						o.description = o.description.replace(/(<[\s\S]+>)/g,'');
						os.posts.push(o);
					})
				})
				console.log(os)
				context.$element().html(template(os))
			})
		})
	};
	var getByDemon = function(context, demon){
		data.news.getByDemon(demon).then(function(res){
			templates.get('demons').then(function(template){
				context.$element().html(template(res))
			})
		})

	};
	var getDaily =function(context){
		data.news.getDaily().then(function(res){
			templates.get('demons').then(function(template){
				context.$element().html(template(res))
			})
		})
	}

	

	return{
		all:getAll
	}
})();
