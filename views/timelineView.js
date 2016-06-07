var com = com || {}
var com.destino = com.destino || {}
var com.destino.view = com.destino.view || {}
var com.destino.view.TimelineView = Backbone.View.extend({
	el: "#timeline",
	template: Handlebars.compile($('#timeline-template').html()),
	initialize: function(options){
		var self = this;
		self.timeline = new com.destino.collection.Timeline();
		self.render();
		self.timeline.fetch({reset:true});
		self.listenTo(self.timeline, 'reset', self.render);
	},
	render: function(){
		var self = this;
		if(self.timeline.models.length > 0){
			var output = self.template({tweet:self.timeline.toJSON()});
			self.$el.append(output);
		}
		return self;
	}
});