class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.references :report, null: false, foreign_key: {on_delete: :cascade}
      t.text :section_slug, null: false
      t.text :slug, null: false
      t.timestamps
    end
    reversible do |direction|
      direction.up { execute 'ALTER TABLE categories ADD CONSTRAINT categories_report_id_section_slug_slug_key UNIQUE (report_id, section_slug, slug)' }
    end
  end
end
