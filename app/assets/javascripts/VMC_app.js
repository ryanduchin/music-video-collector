window.VMCApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var posts = new VMCApp.Collections.Posts();
    var playlists = new VMCApp.Collections.Playlists();
    var router = new VMCApp.Routers.Router({
      $rootEl: $("#main"),
      posts: posts,
      playlists: playlists
    });

    var navbar = new VMCApp.Views.NavView({
      router: router,
      // posts: posts,
      // playlists: playlists,
    });
    $("#navbar").html(navbar.render().$el);

    Backbone.history.start();
  },
};
