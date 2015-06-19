window.VMCApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    // VMCApp.filterEvents = new Backbone.Events();
    VMCApp.filterEvents = {}
    _.extend(VMCApp.filterEvents, Backbone.Events);

    var router = new VMCApp.Routers.Router({
      $rootEl: $("#main"),
    });

    var navbar = new VMCApp.Views.NavView({
      router: router,
    });
    $("#navbar").html(navbar.render().$el);

    // var subNavBar = new VMCApp.Views.SubNavView({
    //   router: router,
    // });

    Backbone.history.start();
  },
};
