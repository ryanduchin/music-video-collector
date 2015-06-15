module Api
  class UsersController < ApiController

    def index
      case params[:filter]
      when 'all'
        @users = User.all
      when 'followed'
        @users = current_user.user_follows
      end
      render :index
    end

    def show
      @user = User.find(params[:id])
      render :show
    end

    # def create
    #   @user = User.new(user_params)
    #
    #   if @user.save
    #     render json: @user
    #   else
    #     render json: @user.errors.full_messages, status: :unprocessable_entity
    #   end
    # end

    # def update
    #   @user = current_user.users.find(params[:id])
    #   if @user.update_attributes(user_params)
    #     render json: @user
    #   else
    #     render json: @user.errors.full_messages, status: :unprocessable_entity
    #   end
    # end
    #
    # def destroy
    #   @user = Like.find(params[:id])
    #   @user.destroy
    #   render json: {}
    # end
    #
    # private
    #
    # def user_params
    #   params.require(:user).permit(:password, :username)
    # end
  end
end
