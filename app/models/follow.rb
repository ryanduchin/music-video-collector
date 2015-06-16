# == Schema Information
#
# Table name: follows
#
#  id              :integer          not null, primary key
#  follower_id     :integer          not null
#  followable_id   :integer          not null
#  followable_type :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Follow < ActiveRecord::Base
  validates :follower_id, :followable_id, :followable_type, presence: true
  validates_uniqueness_of :followable_id, scope: [:follower_id, :followable_type]

  belongs_to :user,
              foreign_key: :follower_id
  belongs_to :followable,
              polymorphic: true,
              foreign_key: :followable_id

end
