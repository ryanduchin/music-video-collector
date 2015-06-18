class DeleteYear < ActiveRecord::Migration
  def change
    remove_column :posts, :year
  end
end
