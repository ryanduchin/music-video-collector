VMCApp.Views.PlaylistShow = Backbone.CompositeView.extend({
  className: 'playlist-show',
  template: JST['playlists/show'],

  initialize: function () {
    this.collection = this.model.posts();
    // this.collection.fetch() //?? causes ALL posts to display?? Why?
    this.renderPosts(); //needed for revisit of page
    // this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPost);
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
});
