window.VMCApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var allPosts = new VMCApp.Collections.AllPosts();
    var router = new VMCApp.Routers.Router({
      $rootEl: $("#main"),
      allPosts: allPosts,
    });

    var navbar = new VMCApp.Views.NavView({
      router: router,
      allPosts: allPosts,
    });
    $("#navbar").html(navbar.render().$el);

    Backbone.history.start();
  },
};
