require 'rails_helper'

RSpec.describe GetAllTargets, type: :service do
  include_context 'report with categories'

  describe '#call' do
    let(:static_category) {
      section.find_category_by_slug('ndc_targets')
    }
    let(:service) {
      GetAllTargets.new(@default_report, section, static_category)
    }
    let(:targets) { service.call(2018) }
    let(:target) { targets.first }
    context 'when tracking' do
      let(:section) { tracking_section }

      it 'reported_percentage is present' do
        expect(target).to have_key('reported_percentage')
      end
    end
    context 'when planning' do
      let(:section) { planning_section }

      it 'reported_percentage is not present' do
        expect(target).not_to have_key('reported_percentage')
      end
    end
  end
end
