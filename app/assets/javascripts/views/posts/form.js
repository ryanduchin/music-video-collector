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
    console.log('hi from modal render');
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createPost: function (event) {
    event.preventDefault();
    var that = this;
    var attrs = this.$el.serializeJSON();
    this.model.set(attrs);
    this.model.save({
      author_id: window.CURRENT_USER_ID,
    }, {
      success: function () {
        console.log('saved');
        // what collection do I add it to? There are multiple 'post' collections.
        // that.collection.add(this.model);

        // do i just do a hard refresh? I don't actually want to navigate anywhere
        // Backbone.history.navigate('posts/' + this.id, {trigger: true});
        that.closeModal();
      }
    });
  },

  closeModal: function () {
    this.remove();
  },

});
