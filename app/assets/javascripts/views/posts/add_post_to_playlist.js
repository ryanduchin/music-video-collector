VMCApp.Views.AddToPlaylistForm = Backbone.CompositeView.extend({
  tagName: 'form',
  className: 'add-post-form',
  template: JST['posts/addtoplaylist'],

  events: {
    'click button.submit-playlist' : 'addToPlaylist',
    'click button.close' : 'closeModal',
    'click button.cancel' : 'closeModal',
    'click .m-backdrop' : 'closeModal',

    'change .playlist-dropdown' : 'selectPlaylist',
    'click .submit-playlist' : 'addToPlaylist',
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

    setTimeout(function () {
      $('.m-backdrop').on('click', this.closeModal.bind(this));
    }.bind(this), 0);

    return this;
  },

  closeModal: function (event) {
    event.preventDefault();
    $('.m-backdrop').off('click');
    this.removeModal();
  },

  removeModal: function () {
    $('.m-content').removeClass('active');
    $('.m-backdrop').removeClass('inactive');
    this.remove();
  },

  selectPlaylist: function (event) {
    this.playlistID = Number(event.target.value);
  },

  addToPlaylist: function (event) {
    event.preventDefault();
    debugger;
    if (this.playlistID === "") { return; }

    var attrs = {
      "post_id": this.model.id,
      "playlist_id": this.playlistID,
    };
    var that = this;
    var playlistPost = new VMCApp.Models.PlaylistPost();
    playlistPost.set(attrs);
    playlistPost.save();
    this.removeModal();
  },



});
