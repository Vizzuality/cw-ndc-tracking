require 'rails_helper'

RSpec.describe GetAllIndicators, type: :service do
  include_context 'report with categories'

  describe '#call' do
    let(:static_category) {
      section.find_category_by_slug('ndc_targets')
    }
    let(:static_target) {
      static_category.find_target_by_slug('ghg_target')
    }
    let(:service) {
      GetAllIndicators.new(
        @default_report, section, static_category, static_target
      )
    }
    let(:indicators) { service.call(2018) }
    let(:indicator) { indicators.first }
    context 'when tracking' do
      let(:section) { tracking_section }

      it 'reported is present' do
        expect(indicator).to have_key('reported')
      end
    end
    context 'when planning' do
      let(:section) { planning_section }

      it 'reported is not present' do
        expect(indicator).not_to have_key('reported')
      end
    end
  end
end
