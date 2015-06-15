VMCApp.Views.UsersIndex = Backbone.CompositeView.extend({
  template: JST['users/index'],
  className: 'users-index',

  initialize: function (options) {
    this.title = options.title
    this.renderUsers();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addUser);
  },


  render: function () {
    var content = this.template({ title: this.title });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderUsers: function () {
    this.collection.forEach(function (user) { this.addUser(user); }.bind(this));
  },

  addUser: function (user) {
    var subView = new VMCApp.Views.UserThumbnail({
      model: user,
      size: 'user',
    });
    this.addSubview('.view-users', subView);
  },

});
