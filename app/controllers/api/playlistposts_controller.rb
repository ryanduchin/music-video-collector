module Api
  class PlaylistpostsController < ApiController

    def index
      @playlist_posts = PlaylistPost.all #!
      render json: @playlist_posts
    end

    def show
      @playlist_post = PlaylistPost.find(params[:id])
      render json: @playlist_post
    end

    # def show
    #   @playlist_post = Playlist.find(

    def create
      PlaylistPost.find({playlist_id: params[:playlist_id]
      @playlist_post = current_post.playlist_posts.new(playlist_post_params)

      if @playlist_post.save
        render json: @playlist_post
      else
        render json: @playlist_post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @playlist_post = PlaylistPost.find(params[:id])
      @playlist_post.destroy
      render json: {}
    end

    private

    def playlist_post_params
      params.permit(:playlist_id, :post_id)
    end

    def current_post
      Playlist.find(params[:playlist_id])
    end

  end
end
