module Api
  class FollowingsController < ApiController

    def index
      @follows = current_user.follows
      render json: @follows
    end

    def show
      @follow = Following.find(params[:id])
      render json: @follow
    end

    def create
      @follow = current_user.follows.new(follow_params)

      if @follow.save
        render json: @follow
      else
        render json: @follow.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @follow = current_user.follows.find(params[:id])
      if @follow.update_attributes(like_params)
        render json: @follow
      else
        render json: @follow.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @follow = Following.find(params[:id])
      @follow.destroy
      render json: {}
    end

    private

    def follow_params
      params.require(:follow).permit(:followed_id, :followed_type)
    end
  end

end
