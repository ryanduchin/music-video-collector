VMCApp.Views.NavView = Backbone.CompositeView.extend({
  tagName: 'nav',
  className: 'navbar',
  template: JST['navbars/navbar'],

  events: {
    "click a.upload-video" : "openPostForm",
    "click a.upload-playlist" : "openPlaylistForm",
  },

  initialize: function (options) {
    $('m-content').removeClass('active');
    $('m-backdrop').removeClass('inactive');

    this.userPlaylists = new VMCApp.Collections.Playlists({ filter: 'user' });
    this.userPosts = new VMCApp.Collections.Posts({ filter: 'user' });

    this.router = options.router;
    // this.listenTo(this.router, 'route', this.selectIcon);

    this.listenTo(VMCApp.filterEvents, 'route', this.selectIcon);
  },

  selectIcon: function (event) {
    debugger;
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
    this.userPosts.fetch();
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
