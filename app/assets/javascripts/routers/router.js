VMCApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.user_posts = options.posts;
    this.user_playlists = options.playlists;
    // this.posts.fetch();
  },

  routes: {
    "" : "users_posts_index",
    "posts/:id" : "post_show",
    "posts" : "users_posts_index",
    "playlists" : "playlists_index",
    "playlists/:id" : "playlist_show",
  },

  // posts_index: function () {


  users_posts_index: function () {
    this.user_posts.fetch();
    var newView = new VMCApp.Views.UsersPostsIndex({
      collection: this.user_posts,
    });
    this.swapView(newView);
  },

  post_show: function (id) {
    var post = this.user_posts.getOrFetch(id); //how do I search all posts???
    var newView = new VMCApp.Views.PostShow({ model: post });
    this.swapView(newView);
  },

  playlist_show: function (id) {
    var playlist = this.user_playlists.getOrFetch(id);
    var newView = new VMCApp.Views.PlaylistShow({
      model: playlist,
    });
    this.swapView(newView);
  },

  playlists_index: function () {
    this.user_playlists.fetch();
    this.user_posts.fetch();
    var newView = new VMCApp.Views.PlaylistsIndex({
      collection: this.user_playlists,
    });
    this.swapView(newView);
  },

  //
  // boards_show: function (id) {
  //   var board = this.boards.getOrFetch(id);
  //   var showView = new TrelloClone.Views.BoardShow({
  //     model: board,
  //   });
  //   this.swapView(showView);
  // },
  //
  // boards_new: function () {
  //   var newBoard = new TrelloClone.Models.Board();
  //   var createView = new TrelloClone.Views.BoardCreate({
  //     model: newBoard,
  //     collection: this.boards,
  //   });
  //   this.swapView(createView);
  // },
  //
  //
  swapView: function (newView) {
    //remove() function
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  },

});
