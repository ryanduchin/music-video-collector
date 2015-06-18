class FixArtistType < ActiveRecord::Migration
  def change
    remove_column :posts, :artist
    add_column :posts, :artist, :string, null: false
  end
end
