VMCApp.Models.Playlist = Backbone.Model.extend({
  urlRoot: '/api/playlists',

  posts: function () {
    if (!this._posts) {
      this._posts = new VMCApp.Collections.AllPosts([], { playlist: this });
    }

    return this._posts;
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, {parse: true});
      delete response.posts;
    }

    return response;
  },
});
