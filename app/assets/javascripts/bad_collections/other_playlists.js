VMCApp.Collections.OtherPlaylists = Backbone.Collection.extend({
  url: '/api/other/playlists',

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
