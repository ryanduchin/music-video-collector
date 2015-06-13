// this is the list of user's playlists
VMCApp.Views.PlaylistsIndex = Backbone.CompositeView.extend({
  template: JST['playlists/index'],
  className: 'playlists-index',

  initialize: function (options) {
    this.title = options.title;
    this.renderPlaylists();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPlaylist);
  },

  render: function () {
    var content = this.template({ title: this.title });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderPlaylists: function () {
    this.collection.forEach(function (playlist) {
      this.addPlaylist(playlist);
    }.bind(this));
  },

  addPlaylist: function (playlist) {
    var subView = new VMCApp.Views.PlaylistThumbnail({
      model: playlist,
    });
    this.addSubview('.view-playlists', subView);
  },

});
