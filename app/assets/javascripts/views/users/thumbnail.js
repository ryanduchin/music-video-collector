VMCApp.Views.UserThumbnail = Backbone.CompositeView.extend({
  tagName: 'li',
  className: 'user-thumbnail col-md-2',
  template: JST['users/thumbnail'],

  initialize: function (options) {
    this.model.posts().fetch();
    this.addFollow();
    this.listenTo(this.model.posts(), 'sync', this.render)
  },

  render: function () {
    var content = this.template({
      user: this.model,
      post: this.choosePost(),
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  choosePost: function () {
    var posts = this.model.posts();
    if (posts.length === 0) { return 'none'; }
    var startInd = Math.floor(Math.random() * (posts.length - 1));
    var post = posts.at(startInd);
    while (post.vidSource() === 'Vevo' && startInd < posts.length) {
      startInd++;
      post = posts.at(startInd);
    };
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
