VMCApp.Collections.Playlists = Backbone.Collection.extend({

  initialize: function (options) {
    if (options.user) {
      this.user = options.user;
    } else if (options.filter) {
      this.filter = options.filter;
    }
  },

  url: function () {
    if (this.user) {
      return 'api/users/' + this.user.id + '/playlists';
    } else {
      return 'api/' + this.filter + '/playlists';
    }
  },

  model: VMCApp.Models.Playlist,

  getOrFetch: function (id) {
    var playlists = this;
    var playlist = this.get(id);

    if (!playlist) {
      playlist = new VMCApp.Models.Playlist({id: id});
      playlist.fetch({
        success: function() {
          playlists.add(playlist);
        }
      });
    } else {
      playlist.fetch();
    }

    return playlist;
  }

});
