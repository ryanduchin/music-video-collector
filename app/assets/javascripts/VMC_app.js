window.VMCApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var allPosts = new VMCApp.Collections.Posts({ filter: 'all' });
    var userPlaylists = new VMCApp.Collections.Playlists({ filter: 'user' });

    var router = new VMCApp.Routers.Router({
      $rootEl: $("#main"),
      allPosts: allPosts,
      userPlaylists: userPlaylists,
    });

    var navbar = new VMCApp.Views.NavView({
      router: router,
      allPosts: allPosts,
      userPlaylists: userPlaylists,
    });
    $("#navbar").html(navbar.render().$el);

    Backbone.history.start();
  },
};
