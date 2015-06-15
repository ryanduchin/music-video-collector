VMCApp.Views.UsersIndex = Backbone.CompositeView.extend({
  template: JST['users/index'],
  className: 'users-index',

  initialize: function () {
    this.renderPosts();
    this.listenTo(this.collection, "sync", this.render);

  },


  render: function () {
    var content = this.template({ title: this.title });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderPosts: function () {
    this.collection.forEach(function (user) { this.addPost(user); }.bind(this));
  },

  addPost: function (user) {
    var subView = new VMCApp.Views.PostThumbnail({ model: user });
    this.addSubview('.view-users', subView);
  },

});

initialize: function (options) {
  this._likeView = new VMCApp.Views.FollowShow({
    model: this.model,
    btnSm: true,
  });
  this.addLike();
  this.listenTo(this.model.like(), 'change', this.addLike);

},

render: function () {
  var content = this.template({ post: this.model });
  this.$el.html(content);
  this.attachSubviews();
  return this;
},

addLike: function () {
  this._likeView.remove();
  this.addSubview('.like-button', this._likeView);
},


});
