module Api
  class UsersController < ApiController

    def index
      @users = User.get_collection(params[:filter], current_user)
      render :index
    end

    def show
      @user = User.find(params[:id])
      render :show
    end
  end
end
