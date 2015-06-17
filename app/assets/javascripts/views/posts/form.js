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
    var that = this;
    var attrs = this.$el.serializeJSON();
    var playlistAttr = $('.form-post-to-playlist').serializeJSON();
    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        // what collection do I add it to? There are multiple 'post' collections.
        // right now being added to "allPosts"
        that.collection.add(that.model);
        that.addToPlaylist(playlistAttr, that.model.id)
        that.removeModal();
        Backbone.history.navigate("#/posts/" + that.model.id, { trigger: true });
      }
    });
  },

  addToPlaylist: function (playlistAttr, id) {
    if (formAttr === "") { return; }
    var attr = $.extend({}, playlistAttr, {post_id: id});
    $.ajax({
        type:'POST',
        url: '/api/playlistposts.json',
        data: attr,
        dataType: 'json',
    });
  },

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
