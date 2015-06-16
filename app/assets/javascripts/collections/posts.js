VMCApp.Collections.Posts = Backbone.Collection.extend({

  initialize: function (options) {
    if (options.user) {
      this.user = options.user;
    }
    if (options.filter) {
      this.filter = options.filter;
    }
  },

  url: function () {
    if (this.user) {
      return 'api/users/' + this.user.id + '/posts';
    } else {
      return '/api/' + filter + '/posts';
    }
  },

  model: VMCApp.Models.Post,

  getOrFetch: function (id) {
    var posts = this;
    var post = this.get(id);

    if (!post) {
      post = new VMCApp.Models.Post({id: id});
      post.fetch({
        success: function() {
          posts.add(post);
        }
      });
    } else {
      post.fetch();
    }

    return post;
  }

});
