VMCApp.Views.SubNavView = Backbone.CompositeView.extend({
  className: 'navbar subnav',
  template_explore: JST['navbars/explore'],
  template_you: JST['navbars/you'],
  template_feed: JST['navbars/feed'],
  template_none: JST['navbars/none'],

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
    } else if (filter === 'show_page') {
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
    $('.subnav-item').removeClass('active')
    var activeElID = this.chooseID(arguments);
    setTimeout(function () {
      $(activeElID).addClass('active');
    }, 0);
    var renderedContent = (this.chooseTemplate(arguments))();
    this.$el.html(renderedContent);
    return this;
  },

  chooseID: function (arguments) {
    var filter = arguments[0];
    var type = arguments[1];
    if (filter === 'followed') {
      if (type === 'playlist') {
        return '.followed-playlists';
      } else if (type === 'user') {
        return '.followed-users';
      }

    } else if (filter === 'user') {
      if (type === 'post') {
        return '.your-posts';
      } else if (type === 'playlist') {
        return '.your-playlists';
      }

    } else if (filter === 'all') {
      if (type === 'post') {
        return '.all-posts';
      } else if (type === 'user') {
        return '.all-users';
      }

    } else if (filter === 'top') {
      return '.top-liked';
    } else if (filter === 'liked') {
      return '.likes';
    } else if (filter === 'staff') {
      return '.staff';
    } else if (filter === 'other') {
      return '.all-playlists';
    }
    return;
  },


});
