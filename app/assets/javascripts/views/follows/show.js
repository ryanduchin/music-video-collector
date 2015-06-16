VMCApp.Views.FollowShow = Backbone.View.extend({
  className: 'follow-show',
  template: JST['follows/show'],

  events: {
    "click button.btn-follow" : "toggleFollow",
  },

  initialize: function (options) {
    this.type = options.type;
    this.btnSm = options.btnSm;
    // this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.follow(), 'change', this.render);
  },

  render: function () {
    var content = this.template({
      model: this.model,
      btnSm: this.btnSm,
    });
    this.$el.html(content);
    this.setButton();
    return this;
  },

  toggleFollow: function () {
    if (this.model.isFollowed()) {
      this.unfollow();
    } else {
      this.follow();
    }
  },

  follow: function () { // how do i differentiate with model type??
    this.model.follow().save({
      followable_id: this.model.id,
      followable_type: this.type,
    });
  },

  unfollow: function () {
    var follow = this.model.follow();
    follow.destroy();
    follow.clear();
  },

  setButton: function () {
    if (this.model.isFollowed()) {
      this.$('button.btn-follow').addClass('btn-primary');
      if (this.btnSm) {
        this.$('button.btn-follow').html("<i class='fa fa-caret-square-o-right'></i>");
      } else {
        this.$('button.btn-follow').html("<i class='fa fa-caret-square-o-right'> Followed!</i>");
      }
    } else {
      this.$('button.btn-follow').removeClass('btn-primary');
      this.$('button.btn-follow').html("<i class='fa fa-caret-square-o-right'></i>");

    }
  },

// need to copy view adding subview of button (copy postshow->like to playlist/user->follow)
// follow's save function needs to save the type
});
