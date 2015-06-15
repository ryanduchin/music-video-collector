VMCApp.Views.UserShow = Backbone.CompositeView.extend({
  className: 'user-show',
  template: JST['users/show'],

  initialize: function () {
    this._followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "User",
      btnSm: true,
    });
    this.addFollow();
    this.renderPosts(); //needed for revisit of page
    // this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPost);
    this.listenTo(this.model.follow(), 'change', this.addFollow);
  },

  render: function () {
    var checkOwner = this.checkOwner();
    // need to deal with delete button if in userPlaylists!!
    var content = this.template({
      user: this.model,
      deleteButton: checkOwner
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderPosts: function () {
    posts = this.model.posts();
    if (posts.length === 0) { return; }
    this.model.posts().forEach(function (post) {
      this.addPost(post);
    }.bind(this));
  },

  addFollow: function () {
    this._followView.remove();
    this.addSubview('.follow-button', this._followView);
  },

  checkOwner: function () {
    if (this.userPlaylists.indexOf(this.model) !== -1) {
      return true
    } else {
      return false
    }
  },
});
