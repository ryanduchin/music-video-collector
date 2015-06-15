module Api
  class PostsController < ApiController

    def index
      case params[:filter]
      when 'all'
        @posts = Post.all.order(created_at: :desc)
      when 'top'
        @posts = Post.all.where(num_likes > 1)#.order('num_likes')
      when 'user'
        @posts = current_user.posts.order(created_at: :desc)
      when 'liked'
        @posts = current_user.liked_posts#.order('post.like.created_at')
      when 'staff'
        @posts = Post.all.where(staff: true).order(created_at: :desc)
      when 'followed'
        playlists = []
        @posts = []
        followed_users = current_user.user_follows
        followed_users.each { |user| playlists.concat(user.playlists) }
        playlists.concat(current_user.playlist_follows)
        playlists.each { |playlist| @posts.concat(playlist.posts) }
        @posts#.order(created_at: :desc)
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
        :title, :url, :artist, :description, :album, :year
      )
    end
  end
end
