module Api
  class PostsController < ApiController

    def create
      @post = current_user.posts.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @post = Post.find(params[:id])
      @post.destroy
      render json: {}
    end

    def update
      @post = current_user.posts.find(params[:id])

      if @post.update_attributes(post_params)
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    private
    def post_params
      params.require(:post).permit(
        :title, :url, :artist, :description, :album, :year
      )
    end
  end
end
