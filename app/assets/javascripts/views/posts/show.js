VMCApp.Views.PostShow = Backbone.CompositeView.extend({
  className: 'post-show',
  template: JST['posts/show'],

  initialize: function (options) {
    this.userPlaylists = options.userPlaylists;
    this.listenTo(this.model, 'sync', this.render);

    this._likeView = new VMCApp.Views.LikeShow({
      model: this.model,
      btnSm: false,
    });
    this.addLike();
    this.listenTo(this.model.like(), 'change', this.addLike);
  },

  render: function () {
    var content = this.template({
      post: this.model,
      userPlaylists: this.userPlaylists,
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addLike: function () {
    this._likeView.remove();
    this.addSubview('.like-button', this._likeView);
  },

});
