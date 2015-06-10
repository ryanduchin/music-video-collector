// this is the feed of the user's uploaded videos

VMCApp.Views.UsersPostsIndex = Backbone.View.extend({
  tagName: 'ul',
  template: JST['posts/users_posts_index'],

  initialize: function () {
    this.listenTo(this.collection, "sync add remove reset", this.render);
  },

  render: function () {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  },

});
