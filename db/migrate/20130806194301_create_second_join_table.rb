class CreateSecondJoinTable < ActiveRecord::Migration
  def up
    create_table :artists_users, :id => false do |t|
      t.belongs_to :artist
      t.belongs_to :user
    end
  end

  def down
    drop_table :artists_users
  end
end
