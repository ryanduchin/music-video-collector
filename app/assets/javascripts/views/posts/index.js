// this is the feed of the user's uploaded videos

VMCApp.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],
  className: 'posts-index',

  initialize: function (options) {
    this.title = options.title;
    this.renderPosts();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPost);

  },


  render: function () {
    var content = this.template({ title: this.title });
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
