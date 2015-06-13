class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :follower_id, null: false
      t.references :followed, polymorphic: true, index: true, null: false

      t.timestamps null: false
    end

    add_index :followings, :follower_id
  end
end
