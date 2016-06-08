var timeline = new com.destino.view.TimelineView();
var profileView = new com.destino.view.ProfileView();
var searchModel = new com.destino.model.Search();
var searchView = new com.destino.view.SearchView({model: searchModel});
var appRouter = new com.destino.router.AppRouter({searchModel: searchModel});
Backbone.history.start();