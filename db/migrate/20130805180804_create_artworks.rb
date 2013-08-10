class CreateArtworks < ActiveRecord::Migration
  def up
    create_table :artworks do |t|
      t.belongs_to :artist
      t.belongs_to :user
      t.string :title
      t.string :date
      t.string :medium
      t.string :collection
      t.string :image_url
      t.string :museum_page_url
      t.integer :image_id
      t.timestamps
    end
  end

  def down
    drop_table :artworks
  end
end
