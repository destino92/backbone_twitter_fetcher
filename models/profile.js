var com = com || {};
com.destino = com.destino || {};
com.destino.model = com.destino.model || {};
com.destino.model.Profile = Backbone.Model.extend({
	urlRoot: 'http://localhost:8080/profile'
});