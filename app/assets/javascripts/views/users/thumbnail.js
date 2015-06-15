VMCApp.Views.UserThumbnail = Backbone.CompositeView.extend({
  tagName: 'li',
  className: 'user-thumbnail col-md-2',
  template: JST['users/thumbnail'],

  initialize: function (options) {
    this.featuredPost = this.choosePost(this.model);
    this._followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "User",
      btnSm: true,
    });
    this.addFollow();
    this.listenTo(this.model.follow(), 'change', this.addFollow);
  },

  render: function () {
    var content = this.template({
      user: this.model,
      post: this.featuredPost,
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  choosePost: function (playlist) {
    var posts = this.model.posts();
    if (posts.length === 0) { return "none"; }
    var i = 0;
    var startInd = Math.floor(Math.random() * posts.length);
    var post = posts.at(startInd);
    //do not use Vevo thumbnail if you can avoid it (loads video)
    while (post.vidSource() === "Vevo" && i < posts.length) {
      i++;
      post = posts.at(i);
    }
    return post;
  },

  addFollow: function () {
    this._followView.remove();
    this.addSubview('.follow-button', this._followView);
  },

});
