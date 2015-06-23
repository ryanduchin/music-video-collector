VMCApp.Views.PlaylistShow = Backbone.CompositeView.extend({
  className: 'playlist-show',
  template: JST['playlists/show'],

  events: {
    'click button.btn-delete' : 'openDeleteForm',
  },

  initialize: function (options) {
    this.playlistPosts = this.model.posts();
    this.renderPosts();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.playlistPosts, "add", this.addPost);
    this.listenToOnce(this.model, 'sync', this.addFollow);
  },

  render: function () {
    var content = this.template({
      playlist: this.model,
      isOwner: this.isOwner(),
      isEmpty: this.isEmpty(),
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderPosts: function () {
    if (this.isEmpty()) { return; }
    this.playlistPosts.forEach(function (post) {
      this.addPost(post);
    }.bind(this));
  },

  addPost: function (post) {
    var subView = new VMCApp.Views.PostThumbnail({
      model: post,
      playlist: this.model,
    });
    this.addSubview('.view-posts', subView);
  },

  addFollow: function () {
    if (this.isOwner()) { return; }
    var followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "Playlist",
      btnSm: false,
    });
    this.addSubview('.follow-button', followView);
  },

  openDeleteForm: function (event) {
    event.preventDefault();
    var modal = new VMCApp.Views.DeleteForm({
      model: this.model,
      type: 'playlist',
    });

    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },


  isEmpty: function () {
    return (this.playlistPosts.length === 0);
  },

  isOwner: function () {
    if (this.model.escape('owner_id') && this.model.escape('owner_id') === CURRENT_USER_ID) {
      return true;
    } else {
      return false;
    }
  },
});
