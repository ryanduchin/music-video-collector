class Post < ActiveRecord::Base
  validates :author_id, :title, :url, :staff, presence: true
end
