// this is the list of user's playlists
VMCApp.Views.PlaylistsIndex = Backbone.CompositeView.extend({
  template: JST['playlists/index'],
  className: 'playlists-index',

  initialize: function () {
    this.renderPlaylists();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPlaylist);
  },

  render: function () {
    var content = this.template();
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
    var subView = new VMCApp.Views.PostThumbnail({
      model: this.choosePost(playlist)
    });
    this.addSubview('.view-playlists', subView);
  },

  choosePost: function (playlist) {

    var posts = playlist.posts();
    var i = 0;
    var post = posts.at(i)
    //do not use Vevo thumbnail if you can avoid it (loads video)
    while (post.vidSource() === "Vevo" && i < posts.length) {
      i++;
      post = posts.at(i);
    }
    return post;
  },


});
