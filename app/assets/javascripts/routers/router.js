VMCApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.userPlaylists = options.userPlaylists;
  },

  routes: {
    "" : "posts_index",
    ":filter/posts" : "posts_index",
    ":filter/playlists" : "playlists_index",
    ":filter/users" : "users_index",

    "posts/:id" : "post_show",
    "playlists/:id" : "playlist_show",
    "users/:id" : "users_show",
  },

  posts_index: function (filter) {
    var _filter = filter || 'followed';

    var posts = new VMCApp.Collections.Posts({ filter: _filter })
    posts.fetch();
    var newView = new VMCApp.Views.PostsIndex({
      collection: posts,
      filter: _filter,
    });
    this.swapView(newView);

    var newNavView = new VMCApp.Views.SubNavView({
      filter: _filter,
      type: 'post',
    });
    this.swapNavView(newNavView);
  },

  users_index: function(filter) {
    var users = new VMCApp.Collections.Users({ filter: filter })
    users.fetch();
    var newView = new VMCApp.Views.UsersIndex({
      collection: users,
      filter: filter,
    });
    this.swapView(newView);

    var newNavView = new VMCApp.Views.SubNavView({
      filter: _subFilter,
      type: 'user',
    });
    this.swapNavView(newNavView);
  },

  playlists_index: function (filter) {
    var playlists = new VMCApp.Collections.Playlists({ filter: filter })
    playlists.fetch();
    var newView = new VMCApp.Views.PlaylistsIndex({
      collection: playlists,
      filter: filter,
    });
    this.swapView(newView);

    var newNavView = new VMCApp.Views.SubNavView({
      filter: filter,
      type: 'playlist',
    });
    this.swapNavView(newNavView);
  },


  post_show: function (id) {
    var posts = new VMCApp.Collections.Posts({ filter: 'all' })
    var post = posts.getOrFetch(id);
    var newView = new VMCApp.Views.PostShow({
      model: post,
      });
    this.swapView(newView);

    var newNavView = new VMCApp.Views.SubNavView({
      filter: 'show',
      type: 'post',
    });
    this.swapNavView(newNavView);
  },

  playlist_show: function (id) {
    var playlists = new VMCApp.Collections.Playlists({ filter: 'all' })
    var playlist = playlists.getOrFetch(id);
    var newView = new VMCApp.Views.PlaylistShow({
      model: playlist,
    });
    this.swapView(newView);

    var newNavView = new VMCApp.Views.SubNavView({
      filter: 'show',
      type: 'playlist',
    });
    this.swapNavView(newNavView);
  },

  users_show: function (id) {
    var users = new VMCApp.Collections.Users({ filter: 'all' })
    var user = users.getOrFetch(id);
    var newView = new VMCApp.Views.UserShow({
      model: user,
    });
    this.swapView(newView);

    var newNavView = new VMCApp.Views.SubNavView({
      filter: 'show',
      type: 'user',
    });
    this.swapNavView(newNavView);
  },

  swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  },

  swapNavView: function (newNavView) {
    this._currentNavView && this._currentNavView.remove();
    this._currentNavView = newNavView;
    $('#subnav').html(this._currentNavView.$el);
    this._currentNavView.render();
  },


});
