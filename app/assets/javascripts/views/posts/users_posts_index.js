// this is the feed of the user's uploaded videos

VMCApp.Views.UsersPostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/users_posts_index'],
  className: 'user-posts-index',

  initialize: function () {
    this.renderPosts();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPost);

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderPosts: function () {
    this.collection.forEach(function (post) { this.addPost(post); }.bind(this));
  },

  addPost: function (post) {
    var subView = new VMCApp.Views.PostThumbnail({ model: post });
    this.addSubview('.view-posts', subView);
  },

});
