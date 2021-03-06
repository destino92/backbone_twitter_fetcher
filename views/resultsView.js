var com = com || {};
com.destino = com.destino || {};
com.destino.view = com.destino.view || {};
com.destino.view.ResultsView = Backbone.View.extend({
	el: "#timeline",
	model: null,
	template: Handlebars.compile($('#timeline-template').html()),
	initialize: function(options){
		var self = this;
		self.model = options.model;
		self.model.fetch();
		self.listenTo(self.model, 'change', self.render);
		self.render();
	},
	render : function(){
		var self = this;
		output = self.template({tweet: self.model.get('statuses')});
		self.$el.html(output);
		return self;
	}
});