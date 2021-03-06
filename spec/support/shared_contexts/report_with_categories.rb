RSpec.shared_context 'report with categories' do
  init_api_user
  include_context 'sections'

  before(:each) {
    FactoryBot.create(:report, user: @api_user)
    VCR.use_cassette('ndcs_BRA') do
      @default_report = InitialiseReport.new(
        @api_user, @api_user.country_iso_code
      ).call([2018], force: true)
    end
  }
end
