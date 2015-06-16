class PlaylistPost < ActiveRecord::Base
  validates :playlist_id, :post_id, presence: true
  validates_uniqueness_of :post_id, scope: :playlist_id
  belongs_to :playlist
  belongs_to :post
  has_one :owner, through: :playlist, source: :user

end
