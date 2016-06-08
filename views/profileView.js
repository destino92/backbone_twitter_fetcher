var com = com || {};
com.destino = com.destino || {};
com.destino.view = com.destino.view || {};
com.destino.view.ProfileView = Backbone.View.extend({
	el: "#profile-view",
	template: Handlebars.compile($('#profile-template').html()),
	model: null,
	initialize: function(options){
		var self = this;
		self.model = new com.destino.model.Profile();
		self.model.fetch();
		self.listenTo(self.model, 'change', self.render);
	},
	render: function(){
		var self = this;
		var output = self.template({user: self.model.toJSON()});
		self.$el.html(output);
		return self;
	}
});