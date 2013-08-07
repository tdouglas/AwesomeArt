class User < ActiveRecord::Base

  attr_accessor :password
  before_save :encrypt_password

  # Validations here

  validates :password, confirmation: true
  validates :password, presence: true, on: :create
  # validates :password, length: { minimum: 6 }
  validates :email, presence: true
  validates :email, uniqueness: true
  # validates :email, :email_format => { :message => 'invalid'}

  attr_accessible :email, :password, :password_confirmation


  has_and_belongs_to_many :artists
  has_and_belongs_to_many :artworks

  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end

  def self.authenticate(email, password)
    user = User.find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end
end