class CreatePlaylistPosts < ActiveRecord::Migration
  def change
    create_table :playlist_posts do |t|
      t.integer :playlist_id, null: false
      t.integer :post_id, null: false
    end
    add_index :playlist_posts, :playlist_id
    add_index :playlist_posts, :post_id
  end
end
