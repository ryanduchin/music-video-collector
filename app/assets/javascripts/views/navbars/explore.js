VMCApp.Views.ExploreSubNav = Backbone.CompositeView.extend({
  tagName: 'nav',
  className: 'navbar subnav',
  template: JST['navbars/explore'],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

});
