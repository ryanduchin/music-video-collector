module Api
  class PlaylistsController < ApiController

    def index
      if params[:filter]
        @playlists = Playlist.get_collection(params[:filter], current_user)
      elsif params[:user_id]
        @playlists = User.where('id=?', params[:user_id])[0].playlists
      end

      render :index
    end

    def show
      @playlist = current_playlist
      @owner = User.find(@playlist.owner_id)
      render :show
    end

    def create
      @playlist = current_user.playlists.new(playlist_params)

      if @playlist.save
        render json: @playlist
      else
        render json: @playlist.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      require_playlist_owner!

      @playlist = current_user.playlists.find(params[:id])

      if @playlist.update_attributes(playlist_params)
        render json: @playlist
      else
        render json: @playlist.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      require_playlist_owner!

      @playlist = current_playlist
      @playlist.destroy
      render json: {}
    end

    private

    def require_playlist_owner!
      redirect_to new_session_url unless current_playlist.owner_id == current_user.id
    end

    def current_playlist
      Playlist.find(params[:id])
    end

    def playlist_params
      params.require(:playlist).permit(:name)
    end
  end
end
