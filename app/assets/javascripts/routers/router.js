VMCApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;

    this.allPosts = new VMCApp.Collections.AllPosts();
    this.userPosts = new VMCApp.Collections.UserPosts();
    this.likedPosts = new VMCApp.Collections.LikedPosts();
    this.staffPosts = new VMCApp.Collections.StaffPosts();

    this.allPlaylists = new VMCApp.Collections.AllPlaylists();
    this.userPlaylists = new VMCApp.Collections.UserPlaylists();
  },

  routes: {
    "" : "all_posts_index", //

    "all/posts" : "all_posts_index",
    "user/posts" : "user_posts_index",
    "liked/posts" : "liked_posts_index",
    "staff/posts" : "staff_posts_index",

    "all/playlists" : "all_playlists_index",
    "user/playlists" : "user_playlists_index",

    "posts/:id" : "post_show",
    "playlists/:id" : "playlist_show",
  },

  swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  },

  /////////////////////////

  posts_index: function (collection) {
    var newView = new VMCApp.Views.PostsIndex({
      collection: collection,
      // title: options.title || "Posts Index",
    });
    this.swapView(newView);
  },

  all_posts_index: function () {
    this.allPosts.fetch();
    this.posts_index(this.allPosts);
  },

  user_posts_index: function () {
    this.userPosts.fetch();
    this.posts_index(this.userPosts);
  },

  liked_posts_index: function () {
    this.likedPosts.fetch();
    this.posts_index(this.likedPosts);
  },

  staff_posts_index: function () {
    this.staffPosts.fetch();
    this.posts_index(this.staffPosts);
  },

  /////////////////////////

  playlists_index: function (collection) {
    var newView = new VMCApp.Views.PlaylistsIndex({
      collection: collection,
    });
    this.swapView(newView);
  },

  all_playlists_index: function () {
    this.allPlaylists.fetch();
    // this.allPosts.fetch(); //??
    this.playlists_index(this.allPlaylists);
  },

  user_playlists_index: function () {
    this.userPlaylists.fetch();
    // this.userPosts.fetch(); //??
    this.playlists_index(this.userPlaylists);
  },

  /////////////////////////

  post_show: function (id) {
    var post = this.allPosts.getOrFetch(id);
    var newView = new VMCApp.Views.PostShow({ model: post });
    this.swapView(newView);
  },

  playlist_show: function (id) {
    var playlist = this.allPlaylists.getOrFetch(id);
    var newView = new VMCApp.Views.PlaylistShow({ model: playlist });
    this.swapView(newView);
  },

});
