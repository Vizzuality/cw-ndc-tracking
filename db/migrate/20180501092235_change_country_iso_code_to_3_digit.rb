class ChangeCountryIsoCodeTo3Digit < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :country_iso_code, :string, null: false, default: 'XXX', limit: 3
  end
end
