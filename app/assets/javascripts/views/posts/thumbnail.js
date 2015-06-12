VMCApp.Views.PostThumbnail = Backbone.View.extend({
  tagName: 'li',
  className: 'thumbnail-container post-thumbnail',
  template: JST['posts/thumbnail'],

  initialize: function () {
    debugger;
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

});
