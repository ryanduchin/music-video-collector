class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :session_token, uniqueness: true

  has_many :posts, foreign_key: :author_id
  has_many :playlists, foreign_key: :owner_id

  has_many :likes
  has_many :liked_posts, through: :likes, source: :post

  # user follows something / Follow:user
  has_many :follows, foreign_key: :follower_id
  has_many :user_follows,
            through: :follows,
            source: :followable,
            source_type: 'User'

  has_many :playlist_follows,
            through: :follows,
            source: :followable,
            source_type: 'Playlist'


  # someone else follows user / Follow:followable
  has_many :followings,
            as: :followable,
            class_name: "Follow"

  has_many :following_users,
            through: :followings,
            source: :user,
            source_type: 'User'

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(params)
    user = User.find_by(username: params[:username])
    return nil unless user && user.is_password?(params[:password])
    return user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def get_user_follow(current_user_id)
    followed_arr = self.followed.where(follower_id: current_user_id)
    if followed_arr.empty?
      return
    else
      return followed_arr.first
    end
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
