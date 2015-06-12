VMCApp.Views.PlaylistShow = Backbone.CompositeView.extend({
  className: 'playlist-show',
  template: JST['playlists/show'],

  initialize: function () {
    this.collection = this.model.posts();
    this.renderPosts();
    this.listenTo(this.collection, "sync", this.render);
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
    if (posts.length === 0) { console.log('no posts'); return; }
    console.log('has posts');
    this.model.posts().forEach(function (post) {
      this.addPost(post);
    }.bind(this));
  },

  addPost: function (post) {
    //post when called from renderPosts, but
    console.log(post.toJSON());
    var subView = new VMCApp.Views.PostThumbnail({ model: post });
    this.addSubview('.view-posts', subView);
  },
});
