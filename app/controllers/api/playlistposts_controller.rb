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

    def create
      @playlist_post = PlaylistPost.find_by(playlist_post_params)
      if @playlist_post
        render json: @playlist_post

      else
        @playlist_post = PlaylistPost.new(playlist_post_params)

        if @playlist_post.save
          render json: @playlist_post
        else
          render json: @playlist_post.errors.full_messages, status: :unprocessable_entity
        end
      end
    end

    def destroy
      @playlist_post = PlaylistPost.find(params[:id])
      @playlist_post.destroy
      render json: {}
    end

    private

    def playlist_post_params
      params.require(:playlistpost).permit(:playlist_id, :post_id)
    end

  end
end
