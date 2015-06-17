VMCApp.Views.PlaylistShow = Backbone.CompositeView.extend({
  className: 'playlist-show',
  template: JST['playlists/show'],

  events: {
    'click button.btn-delete' : 'openDeleteForm',
  },

  initialize: function (options) {
    this.playlistPosts = this.model.posts();
    this.addFollow();
    this.renderPosts(); //needed for revisit of page

    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.playlistPosts, "sync", this.render);
    this.listenTo(this.playlistPosts, "add", this.addPost);
  },

  render: function () {
    var content = this.template({
      playlist: this.model,
      isOwner: this.isOwner()
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  renderPosts: function () {
    // var posts = this.model.posts();
    if (this.playlistPosts.length === 0) { return; }
    this.playlistPosts.forEach(function (post) {
      this.addPost(post);
    }.bind(this));
  },

  addPost: function (post) {
    var subView = new VMCApp.Views.PostThumbnail({
      model: post,
      size: 'normal',
      // playlist: this.model,
      isOwner: this.isOwner(),
    });
    this.addSubview('.view-posts', subView);
  },

  addFollow: function () {
    if (this.isOwner()) { return; }
    // debugger;
    var followView = new VMCApp.Views.FollowShow({
      model: this.model,
      type: "Playlist",
      btnSm: false,
    });
    this.addSubview('.follow-button', followView);
  },

  isOwner: function () {
    // debugger;
    if (this.model.escape('owner_id') && this.model.escape('owner_id') === CURRENT_USER_ID) {
      return true
    } else {
      return false
    }
  },

  openDeleteForm: function (event) {
    event.preventDefault();
    // this.userPlaylists.fetch();

    var modal = new VMCApp.Views.DeleteForm({
      model: this.model,
      // collection: this.userPlaylists,
      type: 'playlist',
    });

    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },
});
