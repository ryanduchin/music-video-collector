VMCApp.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  isLiked: function () {
    return !this.like().isNew();
  },


  like: function () {
    if (!this._like) {
      this._like = new VMCApp.Models.Like();
    }
    return this._like;
  },

  parse: function (response) {
    if (response.like) {
      this.like().set(response.like[0]);
      delete response.like;
    }

    return response;
  },

  vidSource: function () {
    //take everything before '.com'
    if (this.escape('url') === "") { return; }
    var temp = this.escape('url').split('.com')[0];

    //if it has http: part, take everything after
    if (temp.indexOf('://') !== -1) {
      temp = temp.split('://')[1];
    }
    //split off any extra parts of domain name (ex. 'player')
    temp = temp.split('.');
    var sourceName = temp[temp.length - 1];

    //capitalize and return
    return sourceName.charAt(0).toUpperCase() + sourceName.slice(1);
  },

  vidId: function () {
    var videoId;
    var _vidSource = this.vidSource();
    if (_vidSource === "") { return; }
    if (_vidSource === 'Youtube') {
      videoId = this.escape('url').split('v=')[1];
      var ampPos = videoId.indexOf('&');
      if (ampPos != -1) {
        videoId = videoId.substring(0, ampPos);
      }
    } else if ((_vidSource === 'Vimeo') || (_vidSource === 'Vevo')) {
      var urlArray = this.escape('url').split('/');
      videoId = urlArray[urlArray.length - 1];
    }
    return videoId;
  },

  vidEmbedSrc: function () {
    var _vidSource = this.vidSource();
    if (_vidSource === 'Youtube') {
      return 'https://www.youtube.com/embed/';
    } else if (_vidSource === 'Vevo') {
      return 'http://cache.vevo.com/assets/html/embed.html?video=';
    } else if (_vidSource === 'Vimeo') {
      return 'https://player.vimeo.com/video/';
    }
  },

});
