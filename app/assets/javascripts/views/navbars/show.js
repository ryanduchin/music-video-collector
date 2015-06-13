VMCApp.Views.NavView = Backbone.View.extend({
  tagName: 'nav',
  className: 'navbar navbar-default',

  events: {
    "click a.upload-video" : "openForm"
  },

  initialize: function (options) {
    $('m-content').removeClass('active');
    $('m-backdrop').removeClass('inactive');
    
    this.allPosts = options.allPosts;
    this.channels = options.channels;
    this.router = options.router;
  },

  template: JST['navbars/show'],

  render: function () {
    var renderedContent = this.template({
      posts: this.collection,
      channels: this.channels,
    });
    this.$el.html(renderedContent);
    return this;
  },

  openForm: function () {
    var modal = new VMCApp.Views.PostForm({ collection: this.allPosts });
    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },

});
