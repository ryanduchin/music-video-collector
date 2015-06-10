VMCApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.user_posts = options.user_posts;
    // this.posts.fetch();
  },

  routes: {
    "": "users_posts_index",
    // "boards/new" : "boards_new",
    // "boards/:id" : "boards_show",
  },
  //
  users_posts_index: function () {
    this.user_posts.fetch()
    var newView = new VMCApp.Views.UsersPostsIndex({
      collection: this.user_posts,
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
