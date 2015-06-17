VMCApp.Views.PlaylistsIndex = Backbone.CompositeView.extend({
  template: JST['playlists/index'],
  className: 'playlists-index',

  initialize: function (options) {
    this.filter = options.filter;
    // this.renderPlaylists();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPlaylist);
  },

  render: function () {
    var content = this.template({
      title: this.getTitle(this.filter)
    });
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
      size: 'normal',
    });
    this.addSubview('.view-playlists', subView);
  },

  getTitle: function (filter) {
    // debugger;
    var titles = {
      'all' : 'All Playlists',
      'other' : 'Other Playlists',
      'user' : 'Your Playlists',
      'followed' : 'Followed Playlists',
    };
    return titles[filter];
  },


});
