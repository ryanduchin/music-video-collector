class User < ActiveRecord::Base
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, :session_token, uniqueness: true

  attr_reader :password

  has_many(
  )

  after_initialize :ensure_session_token

  def self.find_by_credentials(input, password)
    user = User.find_by(username: input)
    user = User.find_by(email: input) unless user
    return nil unless user && user.valid_password?(password)
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

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
