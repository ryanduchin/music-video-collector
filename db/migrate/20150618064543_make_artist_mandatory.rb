class MakeArtistMandatory < ActiveRecord::Migration
  def change
    remove_column :posts, :artist
    add_column :posts, :artist, :integer, null: false
  end
end
