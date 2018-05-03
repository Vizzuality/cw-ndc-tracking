class CreateIndicators < ActiveRecord::Migration[5.1]
  def change
    create_table :indicators do |t|
      t.references :target, null: false, foreign_key: {on_delete: :cascade}
      t.text :slug, null: false
      t.json :values

      t.timestamps
    end

    reversible do |direction|
      direction.up { execute 'ALTER TABLE indicators ADD CONSTRAINT indicators_target_id_slug_key UNIQUE (target_id, slug)' }
    end
  end
end
