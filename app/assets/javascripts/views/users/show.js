VMCApp.Views.UserShow = Backbone.CompositeView.extend({
  className: 'user-show',
  template: JST['users/show'],

  initialize: function (options) {
    this._followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "User",
      btnSm: false,
    });
    this.addFollow();

    this._userPosts = this.model.posts();
    this._userPlaylists = this.model.playlists();

    // this.renderPlaylists(); //causing an extra box
    // this.renderPosts(); //causing an extra box

    // this.model.fetch();
    this._userPlaylists.fetch();
    this._userPosts.fetch();

    this.listenTo(this.model, 'sync', this.render);

    this.listenTo(this._userPosts, "add", this.addPost);
    this.listenTo(this._userPlaylists, "add", this.addPlaylist);
    this.listenTo(this.model.follow(), 'change', this.addFollow);
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
    // debugger;
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
    // debugger;
    var subView = new VMCApp.Views.PostThumbnail({
      model: post,
      size: 'user'
    });
    this.addSubview('.view-user-posts', subView);
  },

  addPlaylist: function (playlist) {
    // debugger;
    var subView = new VMCApp.Views.PlaylistThumbnail({
      model: playlist,
      size: 'user'
    });
    this.addSubview('.view-user-playlists', subView);
  },


  addFollow: function () {
    this._followView.remove();
    this.addSubview('.follow-button', this._followView);
  },

});
