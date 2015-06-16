VMCApp.Views.AddToPlaylistForm = Backbone.View.extend({
  tagName: 'form',
  className: 'add-post-form',
  template: JST['posts/addtoplaylist'],

  events: {
    'click button.submit-remove' : 'removeFromPlaylist',
    'click .submit-playlists' : 'addToPlaylists',
  },

  initialize: function (options) {
    //only add to your own playlists
    //later, filter so its only playlists without this post
    this.userPlaylists = options.userPlaylists;
  },

  render: function () {
    var content = this.template({
      post: this.model,
      userPlaylists: this.userPlaylists,
    });
    this.$el.html(content);
    return this;
  },

  addToPlaylists: function (event) {
    event.preventDefault();
    var formAttr = this.$el.serializeJSON();
    debugger;
    formAttr["playlist_posts"]["post_id"] = this.model.id;

    // var attr = $.extend({}, formAttr, playlist_post{post_id: this.model.id});
    $.ajax({
        type:'POST',
        url: '/api/playlistposts.json',
        data: formAttr,
        dataType: 'json',
    });
  },

});
