VMCApp.Views.NavView = Backbone.View.extend({
  tagName: 'nav',
  className: 'navbar navbar-default',

  events: {
    "click a.upload-video" : "openPostForm",
    "click a.upload-playlist" : "openPlaylistForm",
  },

  initialize: function (options) {
    $('m-content').removeClass('active');
    $('m-backdrop').removeClass('inactive');

    this.allPosts = options.allPosts;
    this.allPlaylists = options.allPlaylists;
    this.channels = options.channels;
    this.router = options.router;
  },

  template: JST['navbars/show'],

  render: function () {
    var renderedContent = this.template({
      posts: this.collection,
      channels: this.channels,
    });
    this.$el.html(renderedContent);
    return this;
  },

  openPostForm: function (event) {
    event.preventDefault();
    var modal = new VMCApp.Views.PostForm({
      model: new VMCApp.Models.Post(),
      collection: this.allPosts,
    });
    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },

  openPlaylistForm: function (event) {
    event.preventDefault();
    var modal = new VMCApp.Views.PlaylistForm({
      model: new VMCApp.Models.Playlist(),
      collection: this.allPlaylists
    });
    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },

});
