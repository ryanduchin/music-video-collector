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
    if (response.following) {
      this.follow().set(response.following[0]);
      delete response.following;
    }

    return response;
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
