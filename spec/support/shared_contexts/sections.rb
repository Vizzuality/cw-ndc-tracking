RSpec.shared_context 'sections' do
  let(:planning_section) {
    Static::Section.find_by_slug('planning')
  }

  let(:tracking_section) {
    Static::Section.find_by_slug('tracking')
  }
end
