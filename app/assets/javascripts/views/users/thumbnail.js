VMCApp.Views.UserThumbnail = Backbone.CompositeView.extend({
  tagName: 'li',
  className: 'user-thumbnail col-md-2',
  template: JST['users/thumbnail'],

  initialize: function (options) {
    this.size = options.size;
    this.featuredPost = this.choosePost();
    this.addFollow();
  },

  render: function () {
    var content = this.template({
      user: this.model,
      post: this.featuredPost,
      size: this.size,
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  choosePost: function () {
    var posts = this.model.posts();
    if (posts.length === 0) { return 'none'; }
    // var i = 0;
    var startInd = Math.floor(Math.random() * posts.length);
    var post = posts.at(startInd);
    // while (post.vidSource() === 'Vevo' && i < posts.length) {
    //   i++;
    //   startInd++;
    //   post = posts.at(startInd);
    // }
    return post;
  },

  addFollow: function () {
    var followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: 'User',
      btnSm: true,
    });
    this.addSubview('.follow-button', followView);
  },

});
