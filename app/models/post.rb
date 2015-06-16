# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  url         :string           not null
#  artist      :string
#  description :text
#  album       :string
#  year        :string
#  staff       :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ActiveRecord::Base
  validates :author_id, :title, :url, presence: true
  belongs_to :user, foreign_key: :author_id
  has_many :playlist_posts
  has_many :playlists, through: :playlist_posts
  has_many :likes
  has_many :liking_users, through: :likes, source: :user

  def num_likes
    return self.likes.length
  end

  def get_user_like(current_user_id)
    likes_arr = self.likes.where(user_id: current_user_id)
    if likes_arr.empty?
      return
    else
      return likes_arr.first
    end
  end

  def self.get_collection(filter, current_user)
    case filter
    when 'all'
      return Post.all.order(created_at: :desc).limit(30)
    when 'top'
      return Post.joins(:likes).group("posts.id").order('count(likes.id) desc').limit(30)
    when 'user'
      return current_user.posts.order(created_at: :desc).limit(30)
    when 'liked'
      return Post.where("author_id=?", current_user.id)
      # .joins(:likes).order('created_at desc')

      # return current_user.posts.join(:likes).order('created_at desc').limit(30)
    when 'staff'
      return Post.all.where(staff: true).order(created_at: :desc)
    when 'followed'
      posts = []
      users = current_user.user_follows.order(created_at: :desc)
      playlists = current_user.playlist_follows.order(created_at: :desc)
      users.each { |item| posts.concat(item.posts) }
      playlists.each { |item| posts.concat(item.posts) }
      return posts #.order(created_at: :desc)

      # not ordering!
      # duplicate posts?


      # playlists = []
      # posts = []
      # followed_users = current_user.user_follows
      # followed_users.each { |user| playlists.concat(user.playlists) }
      # playlists.concat(current_user.playlist_follows)
      # playlists.each { |playlist| posts.concat(playlist.posts) }
      # posts#.order(created_at: :desc)
      # return posts
    end
  end

end
