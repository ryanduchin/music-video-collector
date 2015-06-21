VMCApp.Views.PostForm = Backbone.View.extend({
  tagName: 'form',
  className: 'post-form',
  template: JST['posts/form'],

  events: {
    'click button.create-post' : 'createPost',
    'click button.cancel-post' : 'closeModal',
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
          that.collection.add(that.model);
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
