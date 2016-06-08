var com = com || {};
com.destino = com.destino || {};
com.destino.view = com.destino.view || {};
com.destino.view.ProfileView = Backbone.View.extend({
	el: "search",
	model: null,
	events: {
		'click #searchButton': 'runSearch'
	},
	initialize: function(options){
		var self = this;
		self.model = options.model;
	},
	runSearch: function(e){
		var self = this;
		query = $('#searchbox').val();
		e.preventDefault();
		// A trick to ensure that the change event of the model gets fired even if the user entered the same search term
		self.model.set('query','',{silent:true});
		self.model.set('query', query);
	}
});