VMCApp.Views.RemoveForm = Backbone.View.extend({
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

    this.playlistpost = new VMCApp.Models.Playlistpost({
      post_id: this.post.id,
      playlist_id: this.playlist.id
    });
    this.playlistpost.fetch();
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
    debugger;
    var attr = {
      post_id: this.post.id,
      playlist_id: this.playlist.id,
    };
    $.ajax({
        type:'DELETE',
        url: '/api/playlistposts/' + this.playlistpost.id + '.json',
        data: attr,
        dataType: 'json',
        success: function () {
          this.removeModal();
          window.location.reload();
        }
    });//.bind(this));

  },

});
