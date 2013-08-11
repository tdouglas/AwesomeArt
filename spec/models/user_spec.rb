require "spec_helper"

describe User do
  it "has none to begin with" do
    expect(User.count).to eq 0
  end

  it "has one after adding one" do
    User.create(email: 'user@example.com', password: 'password')
    expect(User.count).to eq 1
  end

  it "requires a password" do
    User.create(email: 'user@example.com')
    expect(User.count).to eq 0
  end

  it "requires an email" do
    User.create(password: 'password')
    expect(User.count).to eq 0
  end

  it "requires a lengthy password" do
    User.create(email: 'user@example.com', password: 'short')
    expect(User.count).to eq 0
  end

  it "requires a valid email" do
    User.create(email: 'invalid', password: 'password')
    expect(User.count).to eq 0
  end

  it "requires email uniqueness" do
    User.create(email: 'user@example.com', password: 'password_1')
    User.create(email: 'user@example.com', password: 'password_2')
    expect(User.count).to eq 1
  end

  it "encrypts the password" do
    User.create(email: 'user@example.com', password: 'password')
    user = User.first
    expect(user.password).to be nil
    expect(user.password_salt).to be_instance_of String
    expect(user.password_hash).to be_instance_of String
  end

  it "signs you in" do
    User.create(email: 'user@example.com', password: 'password')
    user = User.find_by_email('user@example.com')
    expect(User.authenticate('user@example.com', 'password')).to eq user
  end

  it "doesn't sign you in with the wrong password" do
    User.create(email: 'user@example.com', password: 'password')
    expect(User.authenticate('user@example.com', 'wrong_password')).to eq nil
  end

  it "doesn't sign you in with the wrong email" do
  User.create(email: 'user@example.com', password: 'password')
  expect(User.authenticate('wrong_user@example.com', 'password')).to eq nil
  end
end