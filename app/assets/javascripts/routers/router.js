VMCApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.userPlaylists = options.userPlaylists;
  },

  routes: {
    ":filter/posts" : "posts_index",
    ":filter/playlists" : "playlists_index",
    ":filter/users" : "users_index",

    "posts/:id" : "post_show",
    "playlists/:id" : "playlist_show",
    "users/:id" : "users_show"
  },

  swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  },



  posts_index: function (filter) {
    var posts = new VMCApp.Collections.Posts({ filter: filter })
    posts.fetch();
    var newView = new VMCApp.Views.PostsIndex({
      collection: posts,
      filter: filter,
    });
    this.swapView(newView);
  },

  users_index: function(filter) {
    var users = new VMCApp.Collections.Users({ filter: filter })
    users.fetch();
    var newView = new VMCApp.Views.UsersIndex({
      collection: users,
      filter: filter,
    });
    this.swapView(newView);
  },

  playlists_index: function (filter) {
    var playlists = new VMCApp.Collections.Playlists({ filter: filter })
    playlists.fetch();
    var newView = new VMCApp.Views.PlaylistsIndex({
      collection: playlists,
      filter: filter,
    });
    this.swapView(newView);
  },



  post_show: function (id) {
    var posts = new VMCApp.Collections.Posts({ filter: 'all' })
    var post = posts.getOrFetch(id);
    var newView = new VMCApp.Views.PostShow({
      model: post,
      userPlaylists: this.userPlaylists,
      });
    this.swapView(newView);
  },

  playlist_show: function (id) {
    var playlists = new VMCApp.Collections.Playlists({ filter: 'all' })
    var playlist = playlists.getOrFetch(id);
    var newView = new VMCApp.Views.PlaylistShow({
      model: playlist,
    });
    this.swapView(newView);
  },

  users_show: function (id) {
    var users = new VMCApp.Collections.Users({ filter: 'all' })
    var user = this.allUsers.getOrFetch(id);
    var newView = new VMCApp.Views.UserShow({
      model: user,
    });
    this.swapView(newView);
  },

});
