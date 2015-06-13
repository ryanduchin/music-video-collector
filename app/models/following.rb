class Following < ActiveRecord::Base
  validates :follower_id, :followed_id, :followed_type, presence: true
  validates_uniqueness_of :followed_id, scope: :follower_id
  
  belongs_to :user, foreign_key: :follower_id
  belongs_to :followable, polymorphic: true

end
