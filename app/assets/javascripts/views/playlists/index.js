// this is the list of user's playlists

VMCApp.Views.PlaylistsIndex = Backbone.CompositeView.extend({
  template: JST['playlists/index'],
  className: 'playlists-index',

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    // this.renderPlaylists();
    // setTimeout(this.setHeight.bind(this));
    // this.attachSubviews(); //? needed right? why not?
    return this;
  },

  renderPlaylists: function () {
    this.collection.forEach(function (playlist) { this.addPlaylist(playlist); }.bind(this));
  },

  addPlaylist: function (playlist) {
    var subView = new VMCApp.Views.PlaylistThumbnail({ model: playlist });
    this.addSubview('.view-playlists', subView);
  },

});
