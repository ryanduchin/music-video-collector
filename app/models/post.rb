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
      return Post.all.order(created_at: :desc)
    when 'top'
      return Post.all#.where(
      # where(num_likes > 1)#.order('num_likes')
    when 'user'
      return current_user.posts.order(created_at: :desc)
    when 'liked'
      return current_user.liked_posts#.order('post.like.created_at')
    when 'staff'
      return Post.all.where(staff: true).order(created_at: :desc)
    when 'followed'
      playlists = []
      posts = []
      followed_users = current_user.user_follows
      followed_users.each { |user| playlists.concat(user.playlists) }
      playlists.concat(current_user.playlist_follows)
      playlists.each { |playlist| posts.concat(playlist.posts) }
      posts#.order(created_at: :desc)
      return posts
    end
  end

end
