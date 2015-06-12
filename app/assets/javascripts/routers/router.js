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

  all_posts_index: function () {
    this.allPosts.fetch();
    var newView = new VMCApp.Views.AllPostsIndex({
      collection: this.allPosts,
    });
    this.swapView(newView);

  },

  user_posts_index: function () {
    this.userPosts.fetch();
    var newView = new VMCApp.Views.UserPostsIndex({
      collection: this.userPosts,
    });
    this.swapView(newView);
  },

  liked_posts_index: function () {
    this.likedPosts.fetch();
    var newView = new VMCApp.Views.LikedPostsIndex({
      collection: this.likedPosts,
    });
    this.swapView(newView);
  },

  staff_posts_index: function () {
    this.staffPosts.fetch();
    var newView = new VMCApp.Views.StaffPostsIndex({
      collection: this.staffPosts,
    });
    this.swapView(newView);
  },



  all_playlists_index: function () {
    this.allPlaylists.fetch();
    this.allPosts.fetch(); //??
    var newView = new VMCApp.Views.AllPlaylistsIndex({
      collection: this.allPlaylists,
    });
    this.swapView(newView);
  },

  user_playlists_index: function () {
    this.userPlaylists.fetch();
    this.userPosts.fetch(); //??
    var newView = new VMCApp.Views.UserPlaylistsIndex({
      collection: this.userPlaylists,
    });
    this.swapView(newView);
  },



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


  swapView: function (newView) {
    //remove() function
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  },

});
