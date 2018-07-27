class ChangeIsAdminToStatus < ActiveRecord::Migration[5.1]
  def up
    add_column :users, :status, :text
    execute "UPDATE users SET status = CASE WHEN is_admin THEN 'ADMIN' ELSE 'USER' END"
    change_column :users, :status, :text, null: false, default: 'USER'
    remove_column :users, :is_admin
  end

  def down
    add_column :users, :is_admin, null: false, default: false
    execute "UPDATE users SET is_admin = true WHERE status = 'ADMIN'"
    remove_column :status
  end
end
