window.VMCApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    new VMCApp.Routers.Router({
      $navEl:  $("#navbar"),
      $rootEl:  $("#main"),
    });
    Backbone.history.start();
  }
};
