window.VMCApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var router = new VMCApp.Routers.Router({
      $rootEl: $("#main"),
    });

    var navbar = new VMCApp.Views.NavView({
      router: router,
    });
    $("#navbar").html(navbar.render().$el);

    Backbone.history.start();
  },
};
