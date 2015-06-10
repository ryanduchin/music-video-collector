module Api
  class PlaylistsController < ApiController
    def create
      @playlist = current_user.playlists.new(playlist_params)

      if @playlist.save
        render json: @playlist
      else
        render json: @playlist.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @playlist = current_user.playlists.find(params[:id])
      @playlist.try(:destroy)
      render json: {}
    end

    def index
      @playlists = current_user.playlists
      render json: @playlists
    end

    def show
      @playlist = Playlist.includes(:members, lists: :cards).find(params[:id])
      render :show
    end

    private

    def playlist_params
      params.require(:playlist).permit(:name)
    end
  end
end
