VMCApp.Collections.UserIDPlaylists = Backbone.Collection.extend({
  initialize: function (options) {
    this.id = options.id;
  },

  url: function () {
    return 'api/users/' + this.id + '/playlists';
  },

  model: VMCApp.Models.Playlist,

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
