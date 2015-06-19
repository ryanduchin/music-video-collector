VMCApp.Views.PostForm = Backbone.View.extend({
  tagName: 'form',
  className: 'post-form',
  template: JST['posts/form'],

  events: {
    'click button.create-post' : 'createPost',
    'click button.close' : 'closeModal',
    'click .m-backdrop' : 'closeModal',
  },

  initialize: function (options) {
    this.userPlaylists = options.userPlaylists;
    this.listenTo(this.userPlaylists, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      userPlaylists: this.userPlaylists,
    });
    this.$el.html(content);
    setTimeout(function () {
      $('.m-backdrop').on('click', this.closeModal.bind(this));
    }.bind(this), 0);

    return this;
  },

  createPost: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    this.model.set(attrs);
    this.validateModel();
  },

  validateModel: function () {
    var that = this;
    if ((this.model.vidSource() === 'Youtube' ||
        this.model.vidSource() === 'Vevo' ||
        this.model.vidSource() === 'Vimeo') &&
        this.model.escape('title') !== "" &&
        this.model.escape('artist') !== "") {
      this.model.save({}, {
        success: function () {
          // what collection do I add it to? There are multiple 'post' collections.
          // right now being added to "allPosts"
          that.collection.add(that.model);
          // that.addToPlaylist(playlistAttr, that.model.id)
          that.removeModal();
          Backbone.history.navigate("#/posts/" + that.model.id, { trigger: true });
        }
      });
    } else {
      this.renderError();
    }
  },

  renderError: function () {
    this.$('.render-error').html("Invalid submission")
  },

  // addToPlaylist: function (playlistAttr, id) {
  //   if (formAttr === "") { return; }
  //   var attr = $.extend({}, playlistAttr, {post_id: id});
  //   $.ajax({
  //       type:'POST',
  //       url: '/api/playlistposts.json',
  //       data: attr,
  //       dataType: 'json',
  //   });
  // },

  closeModal: function (event) {
    event.preventDefault();
    $('.m-backdrop').off('click');
    this.removeModal();
  },

  removeModal: function () {
    $('.m-content').removeClass('active');
    $('.m-backdrop').removeClass('inactive');
    this.remove();
  },

});
