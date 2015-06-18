module Api
  class PostsController < ApiController

    def index
      if params[:filter]
        @posts = Post.get_collection(params[:filter], current_user)
      elsif params[:user_id]
        @posts = User.where('id=?', params[:user_id])[0].posts
      end

      render :index
    end

    def show
      @post = current_post
      @author = User.find(@post.author_id)
      render :show
    end

    def create
      @post = current_user.posts.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def updates
      require_post_owner!

      @post = current_user.posts.find(params[:id])

      if @post.update_attributes(post_params)
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      require_post_owner!

      @post = current_post
      @post.destroy
      render json: {}
    end

    private

    def require_post_owner!
      redirect_to new_session_url unless current_post.author_id == current_user.id
    end

    def current_post
      Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(
        :title, :url, :artist, :description, :album
      )
    end
  end
end
