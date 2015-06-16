VMCApp.Collections.UserIDPosts = Backbone.Collection.extend({
  initialize: function (options) {
    this.id = options.id;
  },

  url: function () {
    return 'api/users/' + this.id + '/posts';
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
