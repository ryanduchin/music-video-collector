VMCApp.Views.YouSubNav = Backbone.CompositeView.extend({
  tagName: 'nav',
  className: 'navbar subnav',
  template: JST['navbars/you'],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

});
