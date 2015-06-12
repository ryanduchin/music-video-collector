VMCApp.Views.PostShow = Backbone.View.extend({
  className: 'post-show',
  template: JST['posts/show'],

  events: {
    "click button.btn-like-post" : "toggleLike",
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.like(), 'change', this.render);
  },

  render: function () {
    var content = this.template({
      post: this.model,
    });
    this.$el.html(content);
    this.setBtnColor();
    return this;
  },

  toggleLike: function () {
    if (this.model.isLiked()) {
      console.log('unliking');
      this.unlikePost();
    } else {
      console.log('liking');
      this.likePost(); //
    }
  },

  likePost: function () {
    this.model.like().save({ post_id: this.model.id });
  },

  unlikePost: function () {
    var like = this.model.like();
    like.destroy();
    like.clear();
  },

  setBtnColor: function () {
    if (this.model.isLiked()) {
      this.$('button.btn-like-post').addClass('btn-danger');
      this.$('button.btn-like-post').html("<i class='fa fa-heart'>Liked!</i>");
    } else {
      this.$('button.btn-like-post').removeClass('btn-danger');
      this.$('button.btn-like-post').html('Like');

    }
  },



});
