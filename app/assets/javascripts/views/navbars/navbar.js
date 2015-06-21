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

    this.listenTo(VMCApp.filterEvents, 'route', this.render);
  },

  render: function () {
    $('.nav-item').removeClass('active')
    var activeElID = this.chooseID(arguments);
    setTimeout(function () {
      $(activeElID).addClass('active');
    }, 0);
    var renderedContent = this.template();
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


  chooseID: function (arguments) {
    var filter = arguments[0];
    var type = arguments[1];
    if (filter === 'followed') {
      if (type === 'playlist') {
        return '.you';
      } else if (type === 'user') {
        return '.you';
      } else if (type === 'post') {
        return '.feed';
      }

    } else if (filter === 'user') {
      if (type === 'post') {
        return '.you';
      } else if (type === 'playlist') {
        return '.you';
      }

    } else if (filter === 'all') {
      if (type === 'post') {
        return '.explore';
      } else if (type === 'user') {
        return '.explore';
      }

    } else if (filter === 'top') {
      return '.explore';
    } else if (filter === 'liked') {
      return '.you';
    } else if (filter === 'staff') {
      return '.explore';
    } else if (filter === 'other') {
      return '.explore';
    }
    return;
  },

});
