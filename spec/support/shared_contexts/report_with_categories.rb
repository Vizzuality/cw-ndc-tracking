RSpec.shared_context 'report with categories' do
  include_context 'api user'
  include_context 'reports'
  include_context 'sections'

  before(:each) {
    default_report.initialize_categories([2018], true)
  }
end
