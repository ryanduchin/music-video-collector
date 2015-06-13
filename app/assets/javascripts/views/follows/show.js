VMCApp.Views.FollowShow = Backbone.View.extend({
  className: 'follow-show',
  template: JST['follows/show'],

  events: {
    "click button.btn-follow" : "toggleFollow",
  },

  render: function () {
    var content = this.template({ model: this.model });
    this.$el.html(content);
    this.setButton();
    return this;
  },

  toggleLike: function () {
    if (this.model.isFollowed()) {
      this.unfollow();
    } else {
      this.follow(); //
    }
  },

  follow: function () { // how do i differentiate with model type??
    this.model.follow().save({ post_id: this.model.id });
  },

  unfollow: function () {
    var follow = this.model.follow();
    follow.destroy();
    follow.clear();
  },

  setButton: function () {
    if (this.model.isLiked()) {
      this.$('button.btn-follow').addClass('btn-primary');
      this.$('button.btn-follow').html("<i class='fa'>Followed!</i>");
    } else {
      this.$('button.btn-follow').removeClass('btn-primary');
      this.$('button.btn-follow').html('Follow');

    }
  },

// need to copy view adding subview of button (copy postshow->like to playlist/user->follow)

// user and playlist API needs to return follow
// user API also needs to have playlists
});
