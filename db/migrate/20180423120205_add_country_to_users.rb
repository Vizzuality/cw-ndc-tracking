class AddCountryToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :country_iso_code, :string, null: false, default: 'XX', limit: 2
  end
end
