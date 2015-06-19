VMCApp.Views.NavView = Backbone.CompositeView.extend({
  tagName: 'nav',
  className: 'navbar',
  template: JST['navbars/navbar'],

  events: {
    "click a.upload-video" : "openPostForm",
    "click a.upload-playlist" : "openPlaylistForm",
  },

  initialize: function (options) {
    $('m-content').removeClass('active');
    $('m-backdrop').removeClass('inactive');

    this.userPlaylists = new VMCApp.Collections.Playlists({ filter: 'user' });
    this.userPosts = new VMCApp.Collections.Posts({ filter: 'user' });

    this.router = options.router;
    // this.listenTo(this.router, 'route', this.selectIcon);

    this.listenTo(VMCApp.filterEvents, 'show_page', this.titleOnly);
    this.listenTo(VMCApp.filterEvents, 'post', this.passArgOrSpecializedFunction);
    this.listenTo(VMCApp.filterEvents, 'playlist', this.render);
    this.listenTo(VMCApp.filterEvents, 'user', this.render);
  },

  selectIcon: function (event) {
    debugger;
  },

  render: function () {
    var renderedContent = this.template({
      posts: this.collection,
    });
    this.$el.html(renderedContent);
    return this;
  },

  openPostForm: function (event) {
    event.preventDefault();
    this.userPosts.fetch();
    this.userPlaylists.fetch();

    var modal = new VMCApp.Views.PostForm({
      model: new VMCApp.Models.Post(),
      collection: this.userPosts,
      userPlaylists: this.userPlaylists,
    });
    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
  },

  openPlaylistForm: function (event) {
    event.preventDefault();
    this.userPlaylists.fetch();
    var modal = new VMCApp.Views.PlaylistForm({
      model: new VMCApp.Models.Playlist(),
      collection: this.userPlaylists
    });
    modalContent = modal.render();
    $('.m-backdrop').addClass('inactive');
    $('.m-content').addClass('active');
    $('.m-content').html(modalContent.$el);
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
