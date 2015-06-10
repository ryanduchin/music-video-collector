VMCApp.Views.Thumbnail = Backbone.View.extend({
  template: JST['posts/thumbnail'],

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },
});
