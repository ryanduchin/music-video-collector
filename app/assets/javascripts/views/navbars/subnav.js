VMCApp.Views.SubNavView = Backbone.CompositeView.extend({
  tagName: 'nav',
  className: 'navbar subnav',
  template_explore: JST['navbars/explore'],
  template_you: JST['navbars/you'],

  initialize: function(options) {
    this.filter = options.filter;
    this.chooseTemplate();
  },

  chooseTemplate: function () {
    if (this.filter === 'none') {
      this.template = ('<div>&nbsp;</div>')
    } else if (this.filter === 'followed' ||
               this.filter === 'user') {
      this.template = this.template_you;
    } else {
      this.template = this.template_explore;
    }
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

});
