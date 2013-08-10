class CreateArtists < ActiveRecord::Migration
  def up
    create_table :artists do |t|
      t.belongs_to :user
      t.string :name
      t.timestamps
    end
  end

  def down
    drop_table :artists
  end
end
