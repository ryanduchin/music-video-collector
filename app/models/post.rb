class Post < ActiveRecord::Base
  validates :author_id, :title, :url, :staff, presence: true
  belongs_to :user, foreign_key: :author_id
end
