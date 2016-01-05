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
				//------------------------------------
				//console.log(os)
				data.demon.check().then(function(demon){
					os.demon = demon;
					var os2={demon:demon, posts:[]};
					_(os.posts).each(function(item){
						if(item[demon]){
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
