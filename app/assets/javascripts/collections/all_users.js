VMCApp.Collections.AllUsers = Backbone.Collection.extend({
  url: '/api/all/users',

  model: VMCApp.Models.User,

  getOrFetch: function (id) {
    var users = this;
    var user = this.get(id);

    if (!user) {
      user = new VMCApp.Models.User({id: id});
      user.fetch({
        success: function() {
          users.add(user);
        }
      });
    } else {
      user.fetch();
    }

    return user;
  }

});
