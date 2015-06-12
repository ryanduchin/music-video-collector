VMCApp.Views.PostShow = Backbone.View.extend({
  className: 'post-show',
  template: JST['posts/show'],

  events: {
    "click button.like-post" : "toggleLike",
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.like(), 'change', this.render);
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  toggleLike: function () {
    if (this.model.isLiked()) {
      this.unlikePost();
    } else {
      this.likePost(); //
    }
    console.log(this.model._like)
  },

  unlikePost: function () {
    this.model.like().save({ post_id: this.model.id });
    //is the like method in the backbone post model instead???
  },

  likePost: function () {
    var like = this.model.like();
    like.destroy();
    like.clear();
  },
});
