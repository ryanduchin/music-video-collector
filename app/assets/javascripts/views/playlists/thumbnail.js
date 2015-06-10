VMCApp.Views.PlaylistThumbnail = Backbone.View.extend({
  tagName: 'li',
  className: 'playlist-thumbnail',
  template: JST['playlists/thumbnail'],

  render: function () {
    var content = this.template({ playlist: this.model });
    this.$el.html(content);
    return this;
  },
});
