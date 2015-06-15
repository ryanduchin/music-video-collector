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
    this.renderPlaylists();
    this.renderPosts();

    this.model.fetch();
    this.model.posts().fetch();
    this.model.playlists().fetch();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.posts(), "add", this.addPost);
    this.listenTo(this.model.playlists(), "add", this.addPlaylist);
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
    var playlists = this.model.playlists();
    if (playlists.length === 0) { return; }
    playlists.forEach(function (playlist) {
      this.addPlaylist(playlist);
    }.bind(this));
  },

  renderPosts: function () {
    var posts = this.model.posts();
    if (posts.length === 0) { return; }
    posts.forEach(function (post) {
      this.addPost(post);
    }.bind(this));
  },

  addPost: function (post) {
    var subView = new VMCApp.Views.PostThumbnail({
      model: post,
      size: 'user'
    });
    this.addSubview('.view-user-posts', subView);
  },

  addPlaylist: function (playlist) {
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
