VMCApp.Views.FollowShow = Backbone.View.extend({
  className: 'follow-show',
  template: JST['follows/show'],

  events: {
    "click button.btn-follow" : "toggleFollow",
  },

  initialize: function (options) {
    this.type = options.type;
    this.btnSm = options.btnSm;
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

  follow: function () {
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
      this.$('button.btn-follow').html("Followed");
    } else {
      this.$('button.btn-follow').removeClass('btn-primary');
      this.$('button.btn-follow').html("Follow");
    }
  },

});
