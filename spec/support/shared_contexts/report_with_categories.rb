RSpec.shared_context 'report with categories' do
  include_context 'api user'
  include_context 'reports'
  include_context 'sections'

  before(:each) {
    VCR.use_cassette('ndcs_BRA') do
      default_report = InitialiseReport.new(
        @api_user, @api_user.country_iso_code
      ).call([2018], {force: true})
    end
  }
end
