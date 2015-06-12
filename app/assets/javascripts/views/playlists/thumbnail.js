VMCApp.Views.PlaylistThumbnail = Backbone.View.extend({
  tagName: 'li',
  className: 'thumbnail-container playlist-thumbnail',
  template: JST['playlists/thumbnail'],

  initialize: function () {
    this.featuredPost = this.choosePost(this.model);
  },

  render: function () {
    var content = this.template({
      playlist: this.model,
      post: this.featuredPost,
    });
    this.$el.html(content);
    return this;
  },

  choosePost: function (playlist) {
    var posts = playlist.posts();
    // if (posts.length === 0) { console.log('no post'); return; }
    var i = 0;
    var post = posts.at(i)
    //do not use Vevo thumbnail if you can avoid it (loads video)
    while (post.vidSource() === "Vevo" && i < posts.length) {
      i++;
      post = posts.at(i);
    }
    return post;
  },

});
