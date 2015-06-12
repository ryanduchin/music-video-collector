VMCApp.Views.PlaylistThumbnail = Backbone.View.extend({
  tagName: 'li',
  className: 'thumbnail-container playlist-thumbnail',
  template: JST['playlists/thumbnail'],

  initialize: function (options) {
    this.featuredPost = options.featuredPost;
  },

  render: function () {
    var content = this.template({
      playlist: this.model,
      post: this.featuredPost,
    });
    this.$el.html(content);
    return this;
  },

});
