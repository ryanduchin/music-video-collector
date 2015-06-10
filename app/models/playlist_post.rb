class PlaylistPost < ActiveRecord::Base
  validates :playlist_id, :post_id, presence: true
  belongs_to :playlist
  belongs_to :post
end
