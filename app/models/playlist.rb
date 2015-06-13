class Playlist < ActiveRecord::Base
  validates :owner_id, :name, presence: true
  validates :name, uniqueness: {
    scope: :owner_id, message: 'you already have this playlist'
  }

  belongs_to :user, foreign_key: :owner_id

  has_many :playlist_posts
  has_many :posts, through: :playlist_posts

  # someone else follows playlist
  has_many :followed, as: :followable
  has_many :following_users, through: :followed, source: :user


  def belongs?(user)
    return true if user.id == self.owner_id
  end

  def get_playlist_follow(current_user_id)
    followed_arr = self.followed.where(follower_id: current_user_id)
    if followed_arr.empty?
      return
    else
      return followed_arr.first
    end
  end

end
