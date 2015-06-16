# == Schema Information
#
# Table name: playlist_posts
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  post_id     :integer          not null
#

class PlaylistPost < ActiveRecord::Base
  validates :playlist_id, :post_id, presence: true
  validates_uniqueness_of :post_id, scope: :playlist_id
  belongs_to :playlist
  belongs_to :post
  has_one :owner, through: :playlist, source: :user

end
