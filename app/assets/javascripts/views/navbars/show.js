VMCApp.Views.NavView = Backbone.View.extend({
  tagName: 'nav',
  className: 'navbar navbar-default',
  template: JST['navbars/show'],

  events: {
    "click a.upload-video" : "openPostForm",
    "click a.upload-playlist" : "openPlaylistForm",
  },

  initialize: function (options) {
    $('m-content').removeClass('active');
    $('m-backdrop').removeClass('inactive');

    this.userPosts = new VMCApp.Collections.Posts({ filter: 'user' });
    this.userPlaylists = options.userPlaylists;
    this.userPlaylists.fetch(); //cause problems in user show view BUT fetches for post show dropdown
    this.router = options.router;
  },


  render: function () {
    var renderedContent = this.template({
      posts: this.collection,
    });
    this.$el.html(renderedContent);
    return this;
  },

  openPostForm: function (event) {
    event.preventDefault();
    this.allPosts.fetch();
    this.userPlaylists.fetch();

    var modal = new VMCApp.Views.PostForm({
      model: new VMCApp.Models.Post(),
      collection: this.userPosts,
      userPlaylists: this.userPlaylists,
    });
    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },

  openPlaylistForm: function (event) {
    event.preventDefault();
    this.userPlaylists.fetch();
    var modal = new VMCApp.Views.PlaylistForm({
      model: new VMCApp.Models.Playlist(),
      collection: this.userPlaylists
    });
    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },

});
