VMCApp.Views.NavView = Backbone.Views.extend({
  initialize: function (options) {
    this.channels = options.channels;
    this.router = options.router;
  },

  template: JST['navbars/show'],

  render: function () {
    var renderedContent = this.template({
      posts: this.collection,
      channels: this.channels,
    });
    this.$el.html(renderedContent);
    return this;
  },
});
