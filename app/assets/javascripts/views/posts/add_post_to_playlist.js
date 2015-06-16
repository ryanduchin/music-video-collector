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
    debugger;
    $.ajax({
        type:'DELETE',
        url: '/api/playlistposts/' + this.playlistPost.id + '.json',
        data: this.playlistPost.toJSON(),
        dataType: 'json',
        success: function () {
          this.removeModal();
          window.location.reload();
        }
    });//.bind(this));

  },

});


// addToPlaylist: function (event) {
//   event.preventDefault();
//   var formAttr = $('.form-post-to-playlist').serializeJSON();
//   if (formAttr === "") { return; }
//   var attr = $.extend({}, formAttr, {post_id: this.model.id});
//   $.ajax({
//       type:'POST',
//       url: '/api/playlistposts.json',
//       data: attr,
//       dataType: 'json',
//   });
// },



  // openAddToPlaylistForm: function (event) {
  //   event.preventDefault();
  //   var modal = new VMCApp.Views.AddPostToPlaylistForm({
  //     model: this.model,
  //   });
  //   this.renderModal(modal);
  // },
