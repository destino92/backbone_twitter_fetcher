var com = com || {};
com.destino = com.destino || {};
com.destino.model = com.destino.model || {};
com.destino.model.Search = Backbone.Model.extend({
	url: 'http://localhost:8080/search',
	sync: function(method, model, options){
		if(this.get('query')){
			this.url = this.url + "/" + this.get("query");
		}
		Backbone.sync.call(this, method, model, options);
		// reset url after the search
		this.url = 'http://localhost:8080/search';
	}
});