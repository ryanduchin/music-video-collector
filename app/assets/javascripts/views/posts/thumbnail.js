VMCApp.Views.PostThumbnail = Backbone.View.extend({
  tagName: 'li',
  className: 'thumbnail-container post-thumbnail',
  template: JST['posts/thumbnail'],

  render: function () {
    console.log(this.model.toJSON());
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

});
