VMCApp.Views.PostThumbnail = Backbone.CompositeView.extend({
  tagName: 'li',
  className: 'thumbnail-container post-thumbnail col-md-4',
  template: JST['posts/thumbnail'],

  events: {
    'click button.remove-playlist' : 'openRemoveForm',
    'click button.add-post-to-playlist' : 'addFormToPlaylist',
  },

  initialize: function (options) {
    this.playlist = options.playlist; //if exists
    this.size = options.size;

    this.userPlaylists = new VMCApp.Collections.Playlists({ filter: 'user' });
    this.userPlaylists.fetch();

    this.addLike();

    this._addToPlaylistView = new VMCApp.Views.AddToPlaylistForm({
      model: this.model,
      userPlaylists: this.userPlaylists,
    });

    this.listenTo(this.model, 'add', this.render);
    this.listenTo(this.playlist, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      post: this.model,
      size: this.size,
      playlist: this.playlist,
      isOwner: this.isOwner(),
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  openRemoveForm: function (event) {
    event.preventDefault();
    var modal = new VMCApp.Views.RemoveForm({
      post: this.model,
      playlist: this.playlist,
    });

    modalContent = modal.render();
    $('.m-content').html(modalContent.$el);
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
  },

  addLike: function () {
    var likeView = new VMCApp.Views.LikeShow({
      model: this.model,
      btnSm: true,
    });
    this.addSubview('.like-button', likeView);
  },

  isOwner: function () {
    if (this.playlist &&
        this.playlist.escape('owner_id') &&
        this.playlist.escape('owner_id') === CURRENT_USER_ID) {
      return true;
    } else {
      return false;
    }
  },

  addFormToPlaylist: function () {
    this._addToPlaylistView.remove();
    this.addSubview('.render-add-to-playlist-form', this._addToPlaylistView);
  },

});
