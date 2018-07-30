class AddMoreUserFields < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :organisation, :text
    add_column :users, :sector, :text
    add_column :users, :data_usage, :text
    add_column :users, :tester, :boolean, default: false
  end
end
