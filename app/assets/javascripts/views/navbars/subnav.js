VMCApp.Views.SubNavView = Backbone.CompositeView.extend({
  tagName: 'subnav',
  className: 'navbar subnav',
  template_explore: JST['navbars/explore'],
  template_you: JST['navbars/you'],
  template_feed: JST['navbars/feed'],
  template_none: '<div>&nbsp;</div>',

  initialize: function(options) {
    this.filter = options.filter;
    this.type = options.type;
    this.explore_options = ['Posts', 'Top Liked', 'Staff Picks', 'Playlists', 'Users'];
    this.you_options = ['Posts', 'Likes', 'Playlists', 'Followed Playlists', 'Followed Users'];
    this.template = this.chooseTemplate();
    // this.selectedTitle = this.chooseTitle();
    this.listenTo(VMCApp.filterEvents, 'filter', this.render);
  },

  chooseTemplate: function () {
    if (this.filter === 'followed' && this.type === 'post') {
      return this.template_feed;
    } else if (this.filter === 'show') {
      return this.template_none;
    } else if (this.filter === 'followed' ||
               this.filter === 'user' ||
               this.filter === 'liked') {
      return this.template_you;
    } else {
      return this.template_explore;
    }
  },

  render: function () {
    args._filter
    var template = this.chooseTemplate();
    var content = template();
    this.$el.html('content');
    return this;
  },

  chooseID: function () {
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

    } else if (this.filter === 'user') {
      if (this.type === 'post') {
        return 'your-posts';
      } else if (this.type === 'playlist') {
        return 'your-playlists';
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
