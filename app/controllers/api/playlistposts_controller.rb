module Api
  class PlaylistpostsController < ApiController

    def create
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
      Post.find(params[:id])
    end

  end
end
