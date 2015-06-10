VMCApp.Views.PostThumbnail = Backbone.View.extend({
  tagName: 'li',
  className: 'post-thumbnail',
  template: JST['posts/thumbnail'],

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },
});
