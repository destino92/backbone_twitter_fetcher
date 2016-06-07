var com = com || {};
com.destino = com.destino || {};
com.destino.collection = com.destino.collection || {};
com.destino.collection.Timeline = Backbone.Collection.extend({
	model: com.destino.model.Tweet,
	url: 'http://localhost:8080/timeline',
	initialize: function(){

	}
});