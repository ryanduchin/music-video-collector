VMCApp.Views.PostThumbnail = Backbone.View.extend({
  tagName: 'li',
  className: 'thumbnail-container post-thumbnail col-md-4',
  template: JST['posts/thumbnail'],


  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

});
