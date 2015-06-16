VMCApp.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],
  className: 'posts-index',

  initialize: function (options) {
    this.filter = options.filter;
    // this.renderPosts();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPost);
  },


  render: function () {
    var content = this.template({
      title: this.getTitle(this.filter)
    });
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
    var subView = new VMCApp.Views.PostThumbnail({
      model: post,
      size: 'normal',
    });
    this.addSubview('.view-posts', subView);
  },

  getTitle: function (filter) {
    var titles = {
      'all' : 'All Videos',
      'top' : 'Top Videos',
      'user' : 'Your Videos',
      'liked' : 'Liked Videos',
      'staff' : 'Staff Picks',
      'followed' : 'Your Feed',
    };
    return titles[filter];
  },

});
