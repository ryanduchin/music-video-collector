class Followable < ActiveRecord::Migration
  def change
    drop_table :follows

    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.references :followable, polymorphic: true, index: true, null: false

      t.timestamps null: false
    end

    add_index :follows, :follower_id
  end
end
