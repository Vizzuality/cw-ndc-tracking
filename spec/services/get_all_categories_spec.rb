require 'rails_helper'

RSpec.describe GetAllCategories, type: :service do
  include_context 'report with categories'

  describe '#call' do
    let(:section) { planning_section }
    let(:static_category) {
      section.find_category_by_slug('user_defined_targets')
    }
    let(:service) { GetAllCategories.new(default_report, planning_section) }
    let(:categories) { service.call(2018, []) }
    let(:category) { categories.detect { |c| c['slug'] == static_category.slug }}
    context 'when default categories enabled' do
      it 'extra category is not active' do
        expect(category['active']).to be false
      end
    end
    context 'when additional categories enabled' do
      before(:each) {
        default_report.categories.create(
          section_slug: section.slug, slug: static_category.slug
        )
      }
      it 'extra category is active' do
        expect(category['active']).to be true
      end
    end
  end
end
