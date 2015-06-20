VMCApp.Views.PlaylistForm = Backbone.View.extend({
  tagName: 'form',
  className: 'playlist-form',
  template: JST['playlists/form'],
  beforeSubmit: function (event) {
    this.createPlaylist(event);
  },

  events: {
    'click button.create-playlist' : 'createPlaylist',
    'click a.close' : 'closeModal',
    'click .m-backdrop' : 'closeModal',
    'keyup' : 'processKey',
  },

  processKey: function (e) {
    if(e.keyCode == 13) {
      this.createPlaylist(e);
    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    setTimeout(function () {
      $('.m-backdrop').on('click', this.closeModal.bind(this));
    }.bind(this), 0);
    return this;
  },

  createPlaylist: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    this.model.set(attrs);
    this.validateModel();
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

  validateModel: function () {
    var that = this;
    if (this.model.escape('name') !== "") {
      this.model.save({}, {
        success: function () {
          that.collection.add(that.model);
          that.removeModal();
          Backbone.history.navigate("#/playlists/" + that.model.id, { trigger: true });
        }
      });
    } else {
      this.renderError();
    }
  },

  renderError: function () {
    this.$('.render-error').html("Invalid submission");
  },

});
