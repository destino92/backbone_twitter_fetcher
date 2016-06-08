var com = com || {};
com.destino = com.destino || {};
com.destino.model = com.destino.model || {};
com.destino.model.Tweet = Backbone.Model.extend({
	parse: function(model){
		// Use moment.js to format the date at witch the tweet was create.
		var friendly = moment(model.created_at, "ddd MMM DD HH:mm:ss ZZ YYYY").fromNow();
		// had timestamp has a model property
		model.friendlyDate = friendly;
		return model;
	}
});