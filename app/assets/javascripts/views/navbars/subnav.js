VMCApp.Views.SubNavView = Backbone.CompositeView.extend({
  tagName: 'subnav',
  className: 'navbar subnav',
  template_explore: JST['navbars/explore'],
  template_you: JST['navbars/you'],
  template_feed: JST['navbars/feed'],
  template_none: '<div>&nbsp;</div>',

  initialize: function(options) {
    // this.explore_options = ['Posts', 'Top Liked', 'Staff Picks', 'Playlists', 'Users'];
    // this.you_options = ['Posts', 'Likes', 'Playlists', 'Followed Playlists', 'Followed Users'];
    // this.selectedTitle = this.chooseTitle();
    this.listenTo(VMCApp.filterEvents, 'route', this.render);
  },

  chooseTemplate: function (arguments) {
    var filter = arguments[0];
    var type = arguments[1];
    if (filter === 'followed' && type === 'post') {
      return this.template_feed;
    } else if (filter === 'show') {
      return this.template_none;
    } else if (filter === 'followed' ||
               filter === 'user' ||
               filter === 'liked') {
      return this.template_you;
    } else {
      return this.template_explore;
    }
  },

  render: function () {
    var activeElID = this.chooseID(arguments);
    $(activeElID).addClass('selected');

    var renderedContent = (this.chooseTemplate(arguments))();
    this.$el.html(renderedContent);
    return this;
  },

  chooseID: function (arguments) {
    var filter = arguments[0];
    var type = arguments[1];
    debugger;
    if (this.filter === 'followed') {
      if (this.type === 'playlist') {
        return 'followed-playlists';
      } else if (this.type === 'user') {
        return 'followed-users';
      }

    } else if (this.filter === 'user') {
      if (this.type === 'post') {
        return 'your-posts';
      } else if (this.type === 'playlist') {
        return 'your-playlists';
      }

    } else if (this.filter === 'all') {
      if (this.type === 'post') {
        return 'all-posts';
      } else if (this.type === 'user') {
        return 'all-users';
      }

    } else if (this.filter === 'top') {
      return 'top-liked';
    } else if (this.filter === 'liked') {
      return 'likes';
    } else if (this.filter === 'staff') {
      return 'staff';
    } else if (this.filter === 'other') {
      return 'all-playlists';
    }
    return;
  },


});
