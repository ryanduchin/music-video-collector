VMCApp.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',


  parse: function (response) {
    if (response.playlists) {
      this.posts().set(response.posts, {parse: true});
      delete response.posts;
    }

    if (response.follow) {
      this.follow().set(response.follow);
      delete response.follow;
    }
    return response;
  },

  playlists: function () {
    if (!this._playlists) {
      this._playlists = new VMCApp.Collections.AllPlaylists([], { user: this });
    }

    return this._playlists;
  },

  posts: function () {
    if (!this._posts) {
      this._posts = new VMCApp.Collections.all_posts([], { user: this });
    }

    return this._playlists;
  },

  isFollowed: function () {
    return !this.follow().isNew();
  },


  follow: function () {
    if (!this._follow) {
      this._follow = new VMCApp.Models.Follow();
    }
    return this._follow;
  },
});
