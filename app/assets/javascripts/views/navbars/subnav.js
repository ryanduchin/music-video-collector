VMCApp.Views.SubNavView = Backbone.CompositeView.extend({
  tagName: 'nav',
  className: 'navbar subnav',
  template_explore: JST['navbars/explore'],
  template_you: JST['navbars/you'],

  initialize: function(options) {
    this.filter = options.filter;
  },

  chooseTemplate: function () {
    if (this.filter === 'none') {
      return ('<div>&nbsp;</div>')
    } else if (this.filter === 'followed' ||
               this.filter === 'user' ||
               this.filter === 'liked') {
      return this.template_you();
    } else {
      return this.template_explore();
    }
  },

  render: function () {
    var content = this.chooseTemplate();
    this.$el.html(content);
    return this;
  },

});
