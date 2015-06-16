VMCApp.Collections.UserPosts = Backbone.Collection.extend({

  initialize: function (options) {
    if (options) {
      this.user = options.user;
    }
  },

  url: function () {
    if (this.id) {
      return 'api/users/' + this.user.id + '/posts';
    } else {
      return '/api/user/posts';
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
