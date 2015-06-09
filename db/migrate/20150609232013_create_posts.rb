class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :url, null: false
      t.string :artist
      t.text :description
      t.string :album
      t.string :year
      t.boolean :staff, default: false

      t.timestamps null: false
    end
  end
end
