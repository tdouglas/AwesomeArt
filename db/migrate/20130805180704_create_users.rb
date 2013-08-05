class CreateUsers < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string :screenname
      t.string :email
      t.string :password_hash
      t.string :password_salt
      t.timestamps
    end
  end

  def down
    drop_table :users
  end
end
