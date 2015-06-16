VMCApp.Collections.Users = Backbone.Collection.extend({

  initialize: function (options) {
    if (options.filter) {
      this.filter = options.filter;
    }
  },

  url: function () {
    return '/api/' + filter + '/users';
  },

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
