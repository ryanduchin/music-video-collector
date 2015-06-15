module Api
  class PlaylistsController < ApiController

    def index
      case params[:filter]
      when 'all'
        @playlists = Playlist.all
      when 'user'
        @playlists = current_user.playlists
      end

    # needs setter method..
      # @playlists.each do |playlist|
      #   playlist.follow = playlist.get_playlist_follow(current_user.id)
      # end

      render :index
    end

    def show
      @playlist = Playlist.find(params[:id])
      @owner = User.find(@playlist.owner_id)
      @follow = @playlist.get_playlist_follow(current_user.id)
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
