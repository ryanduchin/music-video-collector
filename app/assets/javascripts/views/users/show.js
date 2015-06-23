VMCApp.Views.UserShow = Backbone.CompositeView.extend({
  className: 'user-show',
  template: JST['users/show'],

  initialize: function (options) {
    this._userPosts = this.model.posts();
    this._userPlaylists = this.model.playlists();
    this._userPosts.fetch();
    this._userPlaylists.fetch();

    this.addFollow();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this._userPosts, "add", this.addPost);
    this.listenTo(this._userPlaylists, "add", this.addPlaylist);
  },

  render: function () {
    var content = this.template({
      user: this.model,
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderPlaylists: function () {
    if (this._userPlaylists.length === 0) { return; }
    this._userPlaylists.forEach(function (playlist) {
      this.addPlaylist(playlist);
    }.bind(this));
  },

  renderPosts: function () {
    if (this._userPosts.length === 0) { return; }
    this._userPosts.forEach(function (post) {
      this.addPost(post);
    }.bind(this));
  },

  addPost: function (post) {
    var subView = new VMCApp.Views.PostThumbnail({
      model: post,
    });
    this.addSubview('.view-user-posts', subView);
  },

  addPlaylist: function (playlist) {
    var subView = new VMCApp.Views.PlaylistThumbnail({
      model: playlist,
    });
    this.addSubview('.view-user-playlists', subView);
  },


  addFollow: function () {
    var followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "User",
      btnSm: false,
    });
    this.addSubview('.user-follow-button', followView);
  },

});
