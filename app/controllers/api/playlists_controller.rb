module Api
  class PlaylistsController < ApiController

    def index
      case params[:filter]
      when 'all'
        @playlists = Playlist.all.order(:name)
      when 'other'
        @playlists = Playlist.all
                             .where('owner_id != ?', current_user.id)
                             .order(created_at: :desc)
      when 'user'
        @playlists = current_user.playlists.order(:name)
      when 'followed'
        @playlists = current_user.playlist_follows.order(:name) #or .order(follow_created_at)
      end

      render :index
    end

    def show
      @playlist = Playlist.find(params[:id])
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
      @playlist = current_user.playlists.find(params[:id])

      if @playlist.update_attributes(playlist_params)
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

    private

    def playlist_params
      params.require(:playlist).permit(:name)
    end
  end
end
