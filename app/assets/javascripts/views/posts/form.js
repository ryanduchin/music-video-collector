VMCApp.Views.PostForm = Backbone.View.extend({
  tagName: 'form',
  className: 'post-form',
  template: JST['posts/form'],

  events: {
    'click button.create-post' : 'createPost',
    'click button.close' : 'closeModal',
    'click .m-backdrop' : 'closeModal',
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createPost: function (event) {
    event.preventDefault();
    var that = this;
    var attrs = this.$el.serializeJSON();
    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        // what collection do I add it to? There are multiple 'post' collections.
        // right now being added to "allPosts"
        that.collection.add(that.model);
        that.removeModal();
        Backbone.history.navigate("#/posts/" + that.model.id, { trigger: true });
      }
    });
  },

  closeModal: function (event) {
    event.preventDefault();
    this.removeModal();
  },

  removeModal: function () {
    $('.m-content').removeClass('active');
    $('.m-backdrop').removeClass('inactive');
    this.remove();
  },

});
