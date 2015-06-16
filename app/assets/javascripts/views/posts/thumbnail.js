VMCApp.Views.PostThumbnail = Backbone.CompositeView.extend({
  tagName: 'li',
  className: 'thumbnail-container post-thumbnail col-md-4',
  template: JST['posts/thumbnail'],

  events: {
    'click button.remove-playlist' : 'openRemoveForm',
  },

  initialize: function (options) {
    this.playlist = options.playlist;
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
      playlist: this.playlist
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addLike: function () {
    this._likeView.remove();
    this.addSubview('.like-button', this._likeView);
  },

  openRemoveForm: function (event) {
    event.preventDefault();
    var modal = new VMCApp.Views.RemoveForm({
      post: this.model,
      playlist: this.playlist,
    });

    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },

});
