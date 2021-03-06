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
    var _filter = filter || 'followed'; // for home
    VMCApp.filterEvents.trigger('route', _filter, 'post')

    var posts = new VMCApp.Collections.Posts({ filter: _filter })
    posts.fetch();
    var newView = new VMCApp.Views.PostsIndex({
      collection: posts,
    });
    this.swapView(newView);
  },

  users_index: function(filter) {
    VMCApp.filterEvents.trigger('route', filter, 'user')

    var users = new VMCApp.Collections.Users({ filter: filter })
    users.fetch();
    var newView = new VMCApp.Views.UsersIndex({
      collection: users,
    });
    this.swapView(newView);
  },

  playlists_index: function (filter) {
    VMCApp.filterEvents.trigger('route', filter, 'playlist');

    var playlists = new VMCApp.Collections.Playlists({ filter: filter })
    playlists.fetch();
    var newView = new VMCApp.Views.PlaylistsIndex({
      collection: playlists,
    });
    this.swapView(newView);
  },


  post_show: function (id) {
    VMCApp.filterEvents.trigger('route', 'show_page', 'post');

    var posts = new VMCApp.Collections.Posts({ filter: 'all' })
    var post = posts.getOrFetch(id);
    var newView = new VMCApp.Views.PostShow({
      model: post,
    });
    this.swapView(newView);
  },

  playlist_show: function (id) {
    VMCApp.filterEvents.trigger('route', 'show_page', 'playlist');

    var playlists = new VMCApp.Collections.Playlists({ filter: 'all' })
    var playlist = playlists.getOrFetch(id);
    var newView = new VMCApp.Views.PlaylistShow({
      model: playlist,
    });
    this.swapView(newView);
  },

  users_show: function (id) {
    VMCApp.filterEvents.trigger('route', 'show_page', 'user');

    var users = new VMCApp.Collections.Users({ filter: 'all' })
    var user = users.getOrFetch(id);
    var newView = new VMCApp.Views.UserShow({
      model: user,
    });
    this.swapView(newView);
  },

  swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  },

});
