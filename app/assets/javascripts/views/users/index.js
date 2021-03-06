VMCApp.Views.UsersIndex = Backbone.CompositeView.extend({
  template: JST['users/index'],
  className: 'users-index',

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addUser);
  },


  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderUsers: function () {
    this.collection.forEach(function (user) {
      this.addUser(user);
    }.bind(this));
  },

  addUser: function (user) {
    if (user.id.toString() === CURRENT_USER_ID) { return; }
    var subView = new VMCApp.Views.UserThumbnail({
      model: user,
    });
    this.addSubview('.view-users', subView);
  },

});
