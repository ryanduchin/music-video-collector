VMCApp.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function (response) {
    if (response.playlists) {
      this.playlists().set(response.playlists, { parse: true });
      delete response.posts;
    }

    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }

    if (response.following) {
      this.follow().set(response.following[0]);
      delete response.follow;
    }
    return response;
  },

  playlists: function () {
    if (!this._playlists) {
      this._playlists = new VMCApp.Collections.Playlists({ user: this });
    }

    return this._playlists;
  },

  posts: function () {
    if (!this._posts) {
      this._posts = new VMCApp.Collections.Posts({ user: this });
    }

    return this._posts;
  },

  follow: function () {
    if (!this._follow) {
      this._follow = new VMCApp.Models.Follow();
    }
    return this._follow;
  },

  isFollowed: function () {
    return !this.follow().isNew();
  },

});
