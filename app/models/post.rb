class Post < ActiveRecord::Base
  validates :author_id, :title, :url, presence: true
  belongs_to :user, foreign_key: :author_id
  has_many :playlist_posts
  has_many :playlists, through: :playlist_posts
  has_many :liking_users, through: :likes
end
