class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false

      t.timestamps null: false
    end

    add_index :playlists, :owner_id
    add_index :playlists, :name
  end
end
