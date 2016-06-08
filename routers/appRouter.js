var com = com || {};
com.destino = com.destino || {};
com.destino.router = com.destino.router || {};
com.destino.router.AppRouter = Backbone.Router.extend({
	searchModel: null,
	initialize: function(options){
		self.searchModel = options.searchModel;
		self.listenTo(self.searchModel, 'change:query', self.navigateToSearch);
	},
	navigateToSearch: function(model, options){
		this.navigate("search/" + model.get('query'), {trigger:true});
	},
	routes : {'search/:query':'search'},
	search : function(query){
		var self = this;
		if(self.searchModel.get("query") != query){
			self.searchModel.set("query", query, {silent:true});
		}
		self.searchModel.fetch({
			success: function(model){
				var resultsView = new com.destino.view.ResultsView(model:model);
			},
			error: function(e){
				alert("An error occured");
			}
		});
	}
});