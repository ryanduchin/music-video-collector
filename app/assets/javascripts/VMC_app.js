window.VMCApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    VMCApp.filterEvents = {};
    _.extend(VMCApp.filterEvents, Backbone.Events);

    var router = new VMCApp.Routers.Router({
      $rootEl: $("#main"),
    });

    var navBar = new VMCApp.Views.NavView();
    var subNavBar = new VMCApp.Views.SubNavView();

    $("#navbar").html(navBar.render().$el);
    $("#subnav").html(subNavBar.render().$el);

    Backbone.history.start();
  },
};
