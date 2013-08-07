class CreateJoinTable < ActiveRecord::Migration
  def up
    create_table :artworks_users, :id => false do |t|
      t.belongs_to :artwork
      t.belongs_to :user
    end
  end

  def down
    drop_table :artworks_users
  end
end
