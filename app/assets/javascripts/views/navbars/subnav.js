VMCApp.Views.SubNavView = Backbone.CompositeView.extend({
  tagName: 'nav',
  className: 'navbar subnav',
  template_explore: JST['navbars/explore'],
  template_you: JST['navbars/you'],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

});
