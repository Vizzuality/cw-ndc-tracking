class FixTargetsUniqueConstraint < ActiveRecord::Migration[5.1]
  def change
    reversible do |direction|
      direction.up {
        execute 'ALTER TABLE targets DROP CONSTRAINT targets_category_id_slug_key'
        execute 'ALTER TABLE targets ADD CONSTRAINT targets_category_id_slug_year_key UNIQUE (category_id, slug, year)'
      }
      direction.down {
        execute 'ALTER TABLE targets DROP CONSTRAINT targets_category_id_slug_year_key'
        execute 'ALTER TABLE targets ADD CONSTRAINT targets_category_id_slug_key UNIQUE (category_id, slug)'
      }
    end
  end
end
