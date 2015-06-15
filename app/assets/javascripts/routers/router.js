VMCApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;

    this.allUsers = new VMCApp.Collections.AllUsers();
    this.followedUsers = new VMCApp.Collections.FollowedUsers();

    this.allPosts = options.allPosts;
    this.topPosts = new VMCApp.Collections.TopPosts();
    this.userPosts = new VMCApp.Collections.UserPosts();
    this.likedPosts = new VMCApp.Collections.LikedPosts();
    this.staffPosts = new VMCApp.Collections.StaffPosts();
    this.followedPosts = new VMCApp.Collections.FollowedPosts();

    this.allPlaylists = new VMCApp.Collections.AllPlaylists();
    this.otherPlaylists = new VMCApp.Collections.OtherPlaylists()
    this.userPlaylists = options.userPlaylists;
    this.followedPlaylists = new VMCApp.Collections.FollowedPlaylists();
  },

  routes: {
    "" : "followed_posts_index", //

    "all/posts" : "all_posts_index",
    "top/posts" : "top_posts_index",
    "user/posts" : "user_posts_index",
    "liked/posts" : "liked_posts_index",
    "staff/posts" : "staff_posts_index",
    "followed/posts" : "followed_posts_index",

    "other/playlists" : "other_playlists_index",
    "user/playlists" : "user_playlists_index",
    "followed/playlists" : "followed_playlists_index",

    "posts/:id" : "post_show",
    "playlists/:id" : "playlist_show",

    "all/users" : "all_users_index",
    "followed/users" : "followed_users_index",
    "users/:id" : "users_show",
  },

  swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  },

  /////////////////////////

  all_posts_index: function () {
    this.allPosts.fetch();
    this.posts_index({
      collection: this.allPosts,
      title: "All Posts",
    });
  },

  top_posts_index: function () {
    this.topPosts.fetch();
    this.posts_index({
      collection: this.topPosts,
      title: "Top Posts",
    });
  },

  user_posts_index: function () {
    this.userPosts.fetch();
    this.posts_index({
      collection: this.userPosts,
      title: "Your Posts"
    });
  },

  liked_posts_index: function () {
    this.likedPosts.fetch();
    this.posts_index({
      collection: this.likedPosts,
      title: "Liked Posts"
    });
  },

  staff_posts_index: function () {
    this.staffPosts.fetch();
    this.posts_index({
      collection: this.staffPosts,
      title: "Staff Picks"
    });
  },

  followed_posts_index: function () {
    this.followedPosts.fetch();
    this.posts_index({
      collection: this.followedPosts,
      title: "Followed Posts / Feed"
    });
  },

  posts_index: function (options) {
    var newView = new VMCApp.Views.PostsIndex({
      collection: options.collection,
      title: options.title,
      // title: options.title || "Posts Index",
    });
    this.swapView(newView);
  },

  /////////////////////////

  other_playlists_index: function () {
    this.otherPlaylists.fetch();
    // this.allPosts.fetch(); //?
    this.playlists_index({
      collection: this.otherPlaylists,
      title: "V|M|C Playlists"
    });
  },

  user_playlists_index: function () {
    this.userPlaylists.fetch();
    // this.userPosts.fetch(); //?
    this.playlists_index({
      collection: this.userPlaylists,
      title: "Your Playlists"
    });
  },

  followed_playlists_index: function () {
    this.followedPlaylists.fetch();
    this.playlists_index({
      collection: this.followedPlaylists,
      title: "Followed Playlists"
    });
  },

  playlists_index: function (options) {
    var newView = new VMCApp.Views.PlaylistsIndex({
      collection: options.collection,
      title: options.title,
    });
    this.swapView(newView);
  },

  /////////////////////////

  all_users_index: function () {
    this.allUsers.fetch();
    this.users_index({
      collection: this.allUsers,
      title: "All Users",
    });
  },

  followed_users_index: function () {
    this.followedUsers.fetch();
    this.users_index({
      collection: this.followedUsers,
      title: "Followed Users",
    });
  },

  users_index: function(options) {
    var newView = new VMCApp.Views.UsersIndex({
      collection: options.collection,
    });
    this.swapView(newView);
  },


  /////////////////////////

  post_show: function (id) {
    var post = this.allPosts.getOrFetch(id);
    var newView = new VMCApp.Views.PostShow({
      model: post,
      userPlaylists: this.userPlaylists,
      });
    this.swapView(newView);
  },

  playlist_show: function (id) {
    var playlist = this.allPlaylists.getOrFetch(id);
    var newView = new VMCApp.Views.PlaylistShow({
      model: playlist,
      userPlaylists: this.userPlaylists,
    });
    this.swapView(newView);
  },

  users_show: function (id) {
    var user = this.allUsers.getOrFetch(id);
    var newView = new VMCApp.Views.UserShow({
      model: user,
    });
    this.swapView(newView);
  },


});
