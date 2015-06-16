class Playlist < ActiveRecord::Base
  validates :owner_id, :name, presence: true
  validates :name, uniqueness: {
    scope: :owner_id, message: 'you already have this playlist'
  }

  belongs_to :user, foreign_key: :owner_id

  has_many :playlist_posts
  has_many :posts, through: :playlist_posts

  has_many :followings,
            as: :followable,
            class_name: "Follow"

  has_many :following_users,
            through: :followings,
            source: :user

  def belongs?(user)
    return true if user.id == self.owner_id
  end

  def get_playlist_follow(current_user_id)
    following_arr = self.followings.where(follower_id: current_user_id)
    if following_arr.empty?
      return
    else
      return following_arr.first
    end
  end

  def self.get_collection(filter, current_user)
    case filter
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
  end
end
