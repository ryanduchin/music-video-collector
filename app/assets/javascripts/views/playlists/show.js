VMCApp.Views.PlaylistShow = Backbone.CompositeView.extend({
  className: 'playlist-show',
  template: JST['playlists/show'],

  initialize: function (options) {
    this.userPlaylists = options.userPlaylists;
    this.collection = this.model.posts();
    this._followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "Playlist",
      btnSm: false,
    });
    this.addFollow();
    this.renderPosts(); //needed for revisit of page
    // this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, "add", this.addPost);
    this.listenTo(this.model.follow(), 'change', this.addFollow);
  },

  render: function () {
    var checkOwner = this.checkOwner();
    // need to deal with delete button if in userPlaylists!!
    var content = this.template({
      playlist: this.model,
      deleteButton: checkOwner
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
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
      size: 'normal',
    });
    this.addSubview('.view-posts', subView);
  },

  addFollow: function () {
    this._followView.remove();
    this.addSubview('.follow-button', this._followView);
  },

  checkOwner: function () {
    if (this.userPlaylists.indexOf(this.model) !== -1) {
      return true
    } else {
      return false
    }
  },
});
