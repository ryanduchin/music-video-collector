VMCApp.Views.PlaylistForm = Backbone.View.extend({
  tagName: 'form',
  className: 'playlist-form',
  template: JST['playlists/form'],

  events: {
    'click button.create-playlist' : 'createPlaylist',
    'click button.close' : 'closeModal',
    'click .m-backdrop' : 'closeModal',
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createPlaylist: function (event) {
    event.preventDefault();
    var that = this;
    var attrs = this.$el.serializeJSON();
    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        console.log('saved');
        // what collection do I add it to? There are multiple 'playlist' collections.
        // right now being added to "allPlaylists"
        that.collection.add(this.model);
        that.closeModal();
      }
    });
  },

  closeModal: function (event) {
    event.preventDefault();
    $('.m-content').removeClass('active');
    $('.m-backdrop').removeClass('inactive');
    this.remove();
  },

});
