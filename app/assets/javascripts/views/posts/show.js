VMCApp.Views.PostShow = Backbone.CompositeView.extend({
  className: 'post-show',
  template: JST['posts/show'],

  events: {
    'click button.btn-delete' : 'openDeleteForm',
    'click button.add-post-to-playlist' : 'openPlaylistForm',
  },


  initialize: function (options) {
    // this.userPlaylists = options.userPlaylists;

    this.userPlaylists = new VMCApp.Collections.Playlists({ filter: 'user' });
    this.userPlaylists.fetch();

    setTimeout(function () {
      this.addLike();
    }.bind(this), 0);

    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      post: this.model,
      // userPlaylists: this.userPlaylists,
      // size: 'normal',
      isOwner: this.isOwner(),
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addLike: function () {
    var likeView = new VMCApp.Views.LikeShow({
      model: this.model,
      btnSm: false,
    });
    this.addSubview('.like-button', likeView);
  },

  openPlaylistForm: function (event) {
    event.preventDefault();

    var modal = new VMCApp.Views.AddToPlaylistForm({
      model: this.model,
      userPlaylists: this.userPlaylists,
    });
    this.renderModal(modal);
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
