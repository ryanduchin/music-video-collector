VMCApp.Views.PlaylistShow = Backbone.CompositeView.extend({
  className: 'playlist-show',
  template: JST['playlists/show'],

  initialize: function () {
    this.collection = this.model.posts();
    // this.collection.fetch() //?? causes ALL posts to display?? Why?
    this._followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "Playlist"
    });

    this.addFollow();
    this.renderPosts(); //needed for revisit of page
    // this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPost);
    this.listenTo(this.model.follow(), 'change', this.addFollow);
  },

  render: function () {
    var content = this.template({ playlist: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderPosts: function () {
    posts = this.model.posts();
    if (posts.length === 0) { return; }
    this.model.posts().forEach(function (post) {
      this.addPost(post);
    }.bind(this));
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
