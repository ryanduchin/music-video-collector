VMCApp.Views.RemoveForm = Backbone.CompositeView.extend({
  className: 'remove-form',
  template: JST['delete/remove'],

  events: {
    'click button.submit-remove' : 'removeFromPlaylist',
    'click button.close' : 'closeModal',
    'click button.cancel' : 'closeModal',
    'click .m-backdrop' : 'closeModal',
  },

  initialize: function (options) {
    this.post = options.post;
    this.playlist = options.playlist;

    var attrs = {
      "post_id": this.post.id,
      "playlist_id": this.playlist.id,
    };
    this.playlistPost = new VMCApp.Models.PlaylistPost();
    this.playlistPost.set(attrs);
    this.playlistPost.save();
  },

  render: function () {
    var content = this.template({
      post: this.post,
      playlist: this.playlist,
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

  removeFromPlaylist: function (event) {
    event.preventDefault();
    this.playlistPost.destroy();
    this.removeModal();
    window.location.reload();
  },

    // $.ajax({
    //     type:'DELETE',
    //     url: '/api/playlistposts/' + this.playlistPost.id + '.json',
    //     data: this.playlistPost.toJSON(),
    //     dataType: 'json',
    //     success: function () {
    //       this.removeModal();
    //       window.location.reload();
    //     }
    // });//.bind(this));


});
