VMCApp.Views.AddToPlaylistForm = Backbone.CompositeView.extend({
  tagName: 'form',
  className: 'add-post-form',
  template: JST['posts/addtoplaylist'],

  events: {
    'click button.submit-remove' : 'removeFromPlaylist',
    'change .playlist-dropdown' : 'selectPlaylist',
    'click .submit-playlists' : 'addToPlaylists',
  },

  initialize: function (options) {
    //only add to your own playlists
    //later, filter so its only playlists without this post
    this.userPlaylists = options.userPlaylists;
    this.playlistID = "";
  },

  render: function () {
    var content = this.template({
      post: this.model,
      userPlaylists: this.userPlaylists,
    });
    this.$el.html(content);
    return this;
  },

  selectPlaylist: function (event) {
    this.playlistID = event.target.value;
  },

  addToPlaylists: function (event) {
    event.preventDefault();
    if (this.playlistID === "") { return; }
    var attrs = {
      "playlist_posts": {
        "post_id": this.model.id,
        "playlist_id": this.playlistID,
      }
    };
    var that = this;
    var playlistPost = new VMCApp.Models.PlaylistPost();
    playlistPost.set(attrs);
    playlistPost.save({}, {
      success: function () {
        that.remove();
      }
    });
  },



});
