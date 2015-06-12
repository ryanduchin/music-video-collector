VMCApp.Views.PlaylistShow = Backbone.CompositeView.extend({
  className: 'playlist-show',
  template: JST['playlists/show'],

  initialize: function () {
    this.collection = this.model.posts();
    this.renderPosts();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "add", this.addPost);
  },

  render: function () {
    var content = this.template({ playlist: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderPosts: function () {
    this.collection.forEach(function (post) {
      this.addPost(post);
    }.bind(this));
  },

  addPost: function (post) {
    var subView = new VMCApp.Views.PostThumbnail({ model: post });
    this.addSubview('.view-posts', subView);
  },
});
