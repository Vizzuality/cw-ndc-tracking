class CreateTargets < ActiveRecord::Migration[5.1]
  def change
    create_table :targets do |t|
      t.references :category, null: false, foreign_key: {on_delete: :cascade}
      t.text :slug, null: false
      t.integer :year, null: false
      t.timestamps
    end
    reversible do |direction|
      direction.up { execute 'ALTER TABLE targets ADD CONSTRAINT targets_category_id_slug_key UNIQUE (category_id, slug)' }
    end
  end
end
