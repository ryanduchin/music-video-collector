// this is the feed of the user's uploaded videos

VMCApp.Views.UsersPostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/users_posts_index'],
  className: 'user-posts-index',

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.renderPosts();
    // setTimeout(this.setHeight.bind(this));
    this.attachSubviews(); //? needed right? why not?
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
