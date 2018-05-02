require 'rails_helper'

RSpec.describe InitialiseReport, type: :service do
  include_context 'api user'

  describe '#call' do
    let(:service) {
      InitialiseReport.new(@api_user, 'BRA')
    }
    let(:report) { service.call([2018]) }
    context 'when no report previously existed' do
      it 'new report is linked to user' do
        expect {
          VCR.use_cassette('ndcs_BRA') do
            service.call([2018])
          end
        }.to change(Report, :count).by(1)
      end
    end
    context 'when report previously existed' do
      it 'no new report is created' do
        FactoryBot.create(:report, user: @api_user)
        expect {
          VCR.use_cassette('ndcs_BRA') do
            service.call([2018])
          end
        }.not_to change(Report, :count)
      end
    end
  end
end
