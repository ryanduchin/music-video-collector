class Playlist < ActiveRecord::Base
  validates :owner_id, :name, presence: true
  validates :name, uniqueness: {
    scope: :owner_id, message: 'you already have this playlist'
  }

  belongs_to :user, foreign_key: :owner_id

  def belongs?(user)
    return true if user.id == self.owner_id
  end

end
