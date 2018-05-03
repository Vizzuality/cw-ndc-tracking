RSpec.shared_context 'api user' do
  before(:each) {
    @api_user = FactoryBot.create(:user, country_iso_code: 'BRA')
  }
end