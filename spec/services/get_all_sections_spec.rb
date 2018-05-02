require 'rails_helper'

RSpec.describe GetAllSections, type: :service do
  include_context 'report with categories'

  describe '#call' do
    let(:service) { GetAllSections.new(@default_report) }
    let(:section) { sections.detect { |c| c['slug'] == Static::Section::PLANNING } }
    let(:category) { section['categories'].detect { |c| c['slug'] == 'ndc_targets' } }
    context 'when categories included' do
      let(:sections) { service.call(2018, [:categories]) }
      it 'categories are not empty' do
        expect(section).to have_key('categories')
      end
      it 'targets are empty' do
        expect(category).not_to have_key('targets')
      end
    end
    context 'when targets included' do
      let(:sections) { service.call(2018, [:categories, :targets]) }
      it 'targets are not empty' do
        expect(category['targets']).not_to be_empty
      end
    end
  end
end
