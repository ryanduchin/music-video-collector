VMCApp.Views.PostShow = Backbone.CompositeView.extend({
  className: 'post-show',
  template: JST['posts/show'],

  events: {
    'click button.btn-delete' : 'openDeleteForm',
  },


  initialize: function (options) {
    $('m-content').removeClass('active');
    $('m-backdrop').removeClass('inactive');

    this.userPosts = options.userPosts; //NEED for delete
    this.userPlaylists = options.userPlaylists; //add post to playlist partial
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
      size: 'normal',
      isOwner: this.isOwner(),
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addLike: function () {
    this._likeView.remove();
    this.addSubview('.like-button', this._likeView);
  },

  isOwner: function () {
    if (this.model.escape('author_id') && this.model.escape('author_id') === CURRENT_USER_ID) {
      return true
    } else {
      return false
    }
  },

  openDeleteForm: function (event) {
    event.preventDefault();
    this.userPosts.fetch();

    var modal = new VMCApp.Views.DeleteForm({
      model: this.model,
      collection: this.userPosts, //
      type: 'post',
    });

    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },

});
