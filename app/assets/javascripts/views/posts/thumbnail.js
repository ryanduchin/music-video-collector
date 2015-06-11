VMCApp.Views.PostThumbnail = Backbone.View.extend({
  tagName: 'li',
  className: 'post-thumbnail',
  template: JST['posts/thumbnail'],

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  vimeoLoadingThumb: function (id) {
    var vidId = id;
    var url = "http://vimeo.com/api/v2/video/" + vidId + ".json?callback=this.VMCApp.Views.PostThumbnail.prototype.vimeoShowThumb";
    var id_img = "#vimeo-" + vidId;

    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = url;
    $(id_img).before(script);
   },


   vimeoShowThumb: function (data){
     var id_img = "#vimeo-" + data[0].id;
     $(id_img).attr('src',data[0].thumbnail_medium);
   },
});
