VMCApp.Views.PostShow = Backbone.CompositeView.extend({
  className: 'post-show',
  template: JST['posts/show'],

  events: {
    'click button.btn-delete' : 'openDeleteForm',
    'click button.add-post-to-playlist' : 'toggleAddToPlaylistForm',
  },


  initialize: function (options) {
    // $('m-content').removeClass('active');
    // $('m-backdrop').removeClass('inactive');

    // this.userPosts = options.userPosts;
    this.userPlaylists = options.userPlaylists;

    this.listenTo(this.model, 'sync', this.render);

    var likeView = new VMCApp.Views.LikeShow({
      model: this.model,
      btnSm: false,
    });
    this.addSubview('.like-button', likeView);


    this._addToPlaylistView = new VMCApp.Views.AddToPlaylistForm({
      model: this.model,
      userPlaylists: this.userPlaylists,
    });

    // this.addLike();

    // this.listenTo(this.model.like(), 'change', this.addLike);
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

  // addLike: function () {
  //   this._likeView.remove();
  //   this.addSubview('.like-button', this._likeView);
  // },

  toggleAddToPlaylistForm: function () {
    //add toggle functionality
    this.addFormToPlaylist();
  },

  addFormToPlaylist: function () {
    this._addToPlaylistView.remove();
    this.addSubview('.render-add-to-playlist-form', this._addToPlaylistView);
  },

  isOwner: function () {
    if (this.model.escape('author_id') && this.model.escape('author_id') === CURRENT_USER_ID) {
      return true;
    } else {
      return false;
    }
  },

  openDeleteForm: function (event) {
    event.preventDefault();
    var modal = new VMCApp.Views.DeleteForm({
      model: this.model,
      // collection: this.userPosts, //
      type: 'post',
    });
    this.renderModal(modal);
  },


  renderModal: function (modal) {
    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },



});
