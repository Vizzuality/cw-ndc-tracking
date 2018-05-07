require 'rails_helper'

RSpec.describe GetAllSections, type: :service do
  include_context 'report with categories'

  describe '#call' do
    let(:service) { GetAllSections.new(@default_report) }
    let(:section) {
      sections.detect { |c| c['slug'] == Static::Section::PLANNING }
    }
    let(:category) {
      section['categories'].detect { |c| c['slug'] == 'ndc_targets' }
    }
    let(:target) {
      category['targets'].detect { |t| t['slug'] == 'ghg_target' }
    }
    context 'when categories included' do
      let(:sections) { service.call(2018, includes: [:categories]) }
      it 'categories are not empty' do
        expect(section).to have_key('categories')
      end
      it 'targets are empty' do
        expect(category).not_to have_key('targets')
      end
    end
    context 'when targets included' do
      let(:sections) { service.call(2018, includes: [:categories, :targets]) }
      it 'targets are not empty' do
        expect(category).to have_key('targets')
      end
      it 'indicators are empty' do
        expect(target).not_to have_key('indicators')
      end
    end
    context 'when indicators included' do
      let(:sections) {
        service.call(2018, includes: [:categories, :targets, :indicators])
      }
      it 'indicators are not empty' do
        expect(target).to have_key('indicators')
      end
    end
  end
end
