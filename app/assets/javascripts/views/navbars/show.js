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

    this.allPosts = options.allPosts;
    // this.allPlaylists = options.allPlaylists;
    this.userPlaylists = options.userPlaylists;
    this.userPlaylists.fetch(); //fetches for the whole app
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
      collection: this.allPosts,
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
