var com = com || {}
var com.destino = com.destino || {}
var com.destino.collection = com.destino.collection || {}
var com.destino.collection.Timeline = Backbone.Collection.extend({
	model: com.destino.model.Tweet,
	url: 'http://localhost:8080/timeline',
	initialize: function(){

	}
});