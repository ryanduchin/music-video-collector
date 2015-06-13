class Post < ActiveRecord::Base
  validates :author_id, :title, :url, presence: true
  belongs_to :user, foreign_key: :author_id
  has_many :playlist_posts
  has_many :playlists, through: :playlist_posts
  has_many :likes
  has_many :liking_users, through: :likes, source: :user

  def num_likes
    return self.likes.length
  end

  def get_user_like(current_user_id)
    likes_arr = self.likes.where(user_id: current_user_id)
    if likes_arr.empty?
      return
    else
      return likes_arr.first
    end
  end
end
