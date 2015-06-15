VMCApp.Views.PlaylistThumbnail = Backbone.CompositeView.extend({
  tagName: 'li',
  className: 'thumbnail-container playlist-thumbnail col-md-4',
  template: JST['playlists/thumbnail'],

  initialize: function (options) {
    this.size = options.size;
    this.featuredPost = this.choosePost(this.model);
    this._followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "Playlist",
      btnSm: true,
    });
    this.addFollow();
    this.listenTo(this.model, 'sync', this.addFollow);
    this.listenTo(this.model.follow(), 'change', this.addFollow);
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

  choosePost: function (playlist) {
    var posts = playlist.posts();
    if (posts.length === 0) { return "none"; }
    var i = 0;
    var post = posts.at(i);
    //do not use Vevo thumbnail if you can avoid it (loads video)
    while (post.vidSource() === "Vevo" && i < posts.length) {
      i++;
      post = posts.at(i);
    }
    return post;
  },

  addFollow: function () {
    if (this.isOwner()) { return; }
    this._followView.remove();
    this.addSubview('.follow-button', this._followView);
  },

  isOwner: function () {
    // if (this.userPlaylists.indexOf(this.model) !== -1) {
    if (this.model.escape('owner_id') && this.model.escape('owner_id') === CURRENT_USER_ID) {
      return true
    } else {
      return false
    }
  },

});
