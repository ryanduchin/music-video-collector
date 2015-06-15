VMCApp.Views.PostThumbnail = Backbone.CompositeView.extend({
  tagName: 'li',
  className: 'thumbnail-container post-thumbnail col-md-4',
  template: JST['posts/thumbnail'],

  initialize: function (options) {
    this.size = options.size;
    this._likeView = new VMCApp.Views.LikeShow({
      model: this.model,
      btnSm: true,
    });
    this.addLike();
    this.listenTo(this.model.like(), 'change', this.addLike);

  },

  render: function () {
    var content = this.template({
      post: this.model,
      size: this.size,
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
