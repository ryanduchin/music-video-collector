VMCApp.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  vidSource: function () {
    //take everything before '.com'
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
    var videoId, source = this.vidSource();
    if (source === 'Youtube') {
      videoId = this.escape('url').split('v=')[1];
      var ampPos = videoId.indexOf('&');
      if (ampPos != -1) {
        videoId = videoId.substring(0, ampPos);
      }
    } else if (source === 'Vimeo' || source === 'Vevo') {
      var urlArray = this.escape('url').split('/');
      videoId = urlArray[urlArray.length - 1];
    }
    return videoId;
  },

  vidEmbedSrc: function () {
    var source = this.vidSource();
    if (source === 'Youtube') {
      return 'https://www.youtube.com/embed/';
    } else if (source === 'Vevo') {
      return 'http://cache.vevo.com/assets/html/embed.html?video=';
    } else if (source === 'Vimeo') {
      return 'https://player.vimeo.com/video/';
    }
  },

});
