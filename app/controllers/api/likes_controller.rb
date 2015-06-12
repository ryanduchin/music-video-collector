module Api
  class LikesController < ApiController

    def index
      @likes = current_user.likes
      render json: @likes
    end

    def show
      @like = Like.find(params[:id])
      render json: @like
    end

    def create
      @like = current_user.likes.new(like_params)

      if @like.save
        render json: @like
      else
        render json: @like.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @like = current_user.likes.find(params[:id])
      if @like.update_attributes(like_params)
        render json: @like
      else
        render json: @like.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @like = Like.find(params[:id])
      @like.destroy
      render json: {}
    end

    private

    def post_params
      params.require(:like).permit(:post_id)
    end
  end
end
