VMCApp.Views.AddToPlaylistForm = Backbone.View.extend({
  className: 'add-post-form',
  template: JST['posts/add_post_to_playlist'],

  events: {
    'click button.submit-remove' : 'removeFromPlaylist',
  },

  initialize: function (options) {
    this.userPlaylists = options.userPlaylists;
  },

  render: function () {
    var content = this.template({
      post: this.model,
      userPlaylists: this.userPlaylists,
      submit: true,
    });
    this.$el.html(content);
    return this;
  },


  addToPlaylist: function (event) {
    event.preventDefault();
    var formAttr = this.$el.serializeJSON();
    formAttr[playlist_post][post_id] = this.model.id;
    debugger;
    // var attr = $.extend({}, formAttr, playlist_post{post_id: this.model.id});
    $.ajax({
        type:'POST',
        url: '/api/playlistposts.json',
        data: formAttr,
        dataType: 'json',
    });
  },

});
