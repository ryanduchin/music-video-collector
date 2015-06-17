VMCApp.Views.PlaylistThumbnail = Backbone.CompositeView.extend({
  tagName: 'li',
  className: 'thumbnail-container playlist-thumbnail col-md-4',
  template: JST['playlists/thumbnail'],

  initialize: function (options) {
    this.size = options.size;
    this.featuredPost = this.choosePost();
    this.addFollow();
  },

  render: function () {
    var content = this.template({
      playlist: this.model,
      post: this.featuredPost,
      size: this.size,
    });

    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  choosePost: function () {
    var posts = this.model.posts();
    if (posts.length === 0) { return "none"; }
    var i = 0;
    var post = posts.at(i);
    // while (post.vidSource() === "Vevo" && i < posts.length) {
    //   i++;
    //   post = posts.at(i);
    // }
    return post;
  },

  addFollow: function () {
    if (this.isOwner()) { return; }
    var followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "Playlist",
      btnSm: true,
    });
    this.addSubview('.follow-button', followView);
  },

  isOwner: function () {
    return (this.model.escape('owner_id') && this.model.escape('owner_id') === CURRENT_USER_ID)
  },

});
