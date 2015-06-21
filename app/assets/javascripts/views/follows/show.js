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
    console.log('rendering');
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
      console.log('unfollowing');
      this.unfollow();
    } else {
      console.log('following');
      this.follow();
    }
  },

  follow: function () {
    this.model.follow().save({
      followable_id: this.model.id,
      followable_type: this.type,
      success: function() {
        console.log('successfully saved follow');
        console.log(this.model.attributes);

      }
    });
  },

  unfollow: function () {
    var follow = this.model.follow();
    follow.destroy({
      success: function() {
        console.log('successfully saved UN_follow');
        // console.log(this.model.attributes);

      }
    });
    follow.clear();
  },

  setButton: function () {
    //why is this rendering '2,1' for follow->unfollow?
    if (this.model.isFollowed()) {
      console.log('1 - is followed');
      console.log(this.model.attributes);
      // debugger;
      this.$('button.btn-follow').addClass('btn-primary');
      this.$('button.btn-follow').html("Followed");
    } else {
      console.log('2 - not followed');
      console.log(this.model.attributes);
      // debugger;
      this.$('button.btn-follow').removeClass('btn-primary');
      this.$('button.btn-follow').html("Follow");
    }
  },

});
