class SplitUserNameToFirstNameAndLastName < ActiveRecord::Migration[5.1]
  def up
    add_column :users, :first_name, :text
    add_column :users, :last_name, :text
    User.all.each do |u|
      name_parts = u.name.split.compact
      if name_parts.length > 1
        u.last_name = name_parts.pop
        u.first_name = name_parts.join(' ')
      else
        u.first_name = '(empty)'
      end
      u.save
    end
    change_column :users, :first_name, :text, null: false
    change_column :users, :last_name, :text, null: false
    remove_column :users, :name
  end

  def down
    add_column :users, :name, :text
    User.all.each do |u|
      u.name = [u.first_name, u.last_name].join(' ')
      u.save
    end
    change_column :users, :name, :text, null: false
    remove_column :users, :last_name
    remove_column :users, :first_name
  end
end
