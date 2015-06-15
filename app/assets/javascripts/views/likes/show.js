VMCApp.Views.LikeShow = Backbone.View.extend({
  className: 'like-show',
  template: JST['likes/show'],

  events: {
    "click button.btn-like-post" : "toggleLike",
  },

  initialize: function (options) {
    this.btnSm = options.btnSm;
  },

  render: function () {
    var content = this.template({
      btnSm: this.btnSm,
    });
    this.$el.html(content);
    this.setButton();
    return this;
  },

  toggleLike: function () {
    if (this.model.isLiked()) {
      this.unlikePost();
    } else {
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

  setButton: function () {
    if (this.model.isLiked()) {
      this.$('button.btn-like-post').addClass('btn-danger');
      if (this.btnSm) {
        this.$('button.btn-like-post').html("<i class='fa fa-heart'></i>");
      } else {
        this.$('button.btn-like-post').html("<i class='fa fa-heart'>Liked!</i>");
      }
    } else {
      this.$('button.btn-like-post').removeClass('btn-danger');
      if (this.btnSm) {
        this.$('button.btn-like-post').html("<i class='fa fa-heart'></i>");
      } else {
        this.$('button.btn-like-post').html("Like");
      }
    }
  },

});
