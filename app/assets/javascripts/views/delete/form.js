VMCApp.Views.DeleteForm = Backbone.View.extend({
  tagName: 'form',
  className: 'delete-form',
  template: JST['delete/form'],

  events: {
    'click button.submit-delete' : 'deleteModel',
    'click button.close' : 'closeModal',
    'click button.cancel' : 'closeModal',
    'click .m-backdrop' : 'closeModal',
  },

  initialize: function (options) {
    this.type = options.type;
  },

  render: function () {
    var content = this.template({
      type: this.type,
      name: this.getName(),
    });
    this.$el.html(content);
    setTimeout(function () {
      $('.m-backdrop').on('click', this.closeModal.bind(this));
    }.bind(this), 0);
    return this;
  },

  deleteModel: function (event) {
    event.preventDefault();
    // this.collection.remove(this.model);
    this.model.destroy();
    // this.model.clear();
    window.history.back();
  },

  closeModal: function (event) {
    event.preventDefault();
    $('.m-backdrop').off('click');
    this.removeModal();
  },

  getName: function () {
    if (this.type === 'post') {
      return this.model.escape('title');
    } else {
      return this.model.escape('name');
    }
  },

  removeModal: function () {
    $('.m-content').removeClass('active');
    $('.m-backdrop').removeClass('inactive');
    this.remove();
  },

});
