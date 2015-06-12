VMCApp.Views.PlaylistShow = Backbone.CompositeView.extend({
  className: 'playlist-show',
  template: JST['playlists/show'],

  initialize: function () {
    this.collection = this.model.posts();
    // this.collection.fetch() //?? because not called from router
    // this.renderPosts(); //dont use, there are no posts...
    // this.listenTo(this.collection, "sync", this.render); //why is this extra??
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
    // if (posts.length === 0) { console.log('no posts'); return; }
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
