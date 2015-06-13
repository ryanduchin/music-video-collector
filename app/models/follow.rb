class Follow < ActiveRecord::Base
  validates :follower_id, :followable_id, :followable_type, presence: true
  validates_uniqueness_of :followable_id, scope: :follower_id

  belongs_to :user,
              foreign_key: :follower_id
  belongs_to :followable,
              polymorphic: true,
              foreign_key: :followable_id

end
