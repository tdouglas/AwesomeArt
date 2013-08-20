class AddIndexesToTables < ActiveRecord::Migration
  def change
    add_index :users, :screenname
    add_index :users, :email
    add_index :users, :password_hash
    add_index :users, :password_salt
    add_index :artists, :name
    add_index :artworks, :title
    add_index :artworks, :date
    add_index :artworks, :medium
    add_index :artworks, :collection
    add_index :artworks, :image_url
    add_index :artworks, :museum_page_url
  end
end
