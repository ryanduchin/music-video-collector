VMCApp.Views.UserShow = Backbone.CompositeView.extend({
  className: 'user-show',
  template: JST['users/show'],

  initialize: function (options) {
    this._followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "User",
      btnSm: false,
    });
//
    this.addFollow();
    this.renderPosts();
    this.renderPlaylists();

    // this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.posts, "add", this.addPost);
    this.listenTo(this.playlists, "add", this.addPlaylist);
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

  renderPosts: function () {
    this.collection.forEach(function (post) { this.addPost(post); }.bind(this));
  },

  addPost: function (post) {
    var subView = new VMCApp.Views.PostThumbnail({ model: post });
    this.addSubview('.view-posts', subView);
  },


  addFollow: function () {
    this._followView.remove();
    this.addSubview('.follow-button', this._followView);
  },

});
