window.VMCApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var allPosts = new VMCApp.Collections.AllPosts();
    var allPlaylists = new VMCApp.Collections.AllPlaylists();

    var router = new VMCApp.Routers.Router({
      $rootEl: $("#main"),
      allPosts: allPosts,
      allPlaylists: allPlaylists,
    });

    var navbar = new VMCApp.Views.NavView({
      router: router,
      allPosts: allPosts,
      allPlaylists: allPlaylists,
    });
    $("#navbar").html(navbar.render().$el);

    Backbone.history.start();
  },
};
