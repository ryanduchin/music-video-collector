VMCApp.Views.NavView = Backbone.CompositeView.extend({
  tagName: 'nav',
  className: 'navbar navbar-default',
  template: JST['navbars/show'],

  events: {
    "click a.upload-video" : "openPostForm",
    "click a.upload-playlist" : "openPlaylistForm",
    'click li#feed' : 'closeSubNav',
    'click li#explore' : 'exploreSubNav',
    'click li#you' : 'youSubNav',
  },

  initialize: function (options) {
    $('m-content').removeClass('active');
    $('m-backdrop').removeClass('inactive');

    this.userPlaylists = new VMCApp.Collections.Playlists({ filter: 'user' });
    this.userPosts = new VMCApp.Collections.Posts({ filter: 'user' });

    this.router = options.router;

    this._exploreSubNav = new VMCApp.Views.ExploreSubNav();
    this._youSubNav = new VMCApp.Views.YouSubNav();
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

  exploreSubNav: function (event) {
    var subContent = this._exploreSubNav.render();
    $('#subnav').html(subContent.$el);
  },

  youSubNav: function (event) {
    var  subContent = this._youSubNav.render();
    $('#subnav').html(subContent.$el);
  },

  closeSubNav: function (event) {
    $('#subnav').html();
  },


});
