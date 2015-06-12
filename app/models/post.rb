class Post < ActiveRecord::Base
  validates :author_id, :title, :url, presence: true
  belongs_to :user, foreign_key: :author_id
  has_many :playlist_posts
  has_many :playlists, through: :playlist_posts
  has_many :likes
  has_many :liking_users, through: :likes, source: :user


  def getUserLike
    var likesArr = self.likes.where(user_id: current_user.id); #no current_user
    if likesArr.empty?
      return
    else
      return likesArr.first.id
    end
  end
end
