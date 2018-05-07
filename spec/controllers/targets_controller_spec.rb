require 'rails_helper'

RSpec.describe Api::V1::TargetsController, type: :controller do
  include_context 'report with categories'
  login_user(@api_user)

  describe 'GET index' do
    it 'renders basic properties for each target' do
      get :index, params: {
        section_slug: 'planning', category_slug: 'ndc_targets'
      }
      expect(@response).to match_response_schema('targets')
    end

    it 'includes indicators' do
      get :index, params: {
        section_slug: 'planning',
        category_slug: 'ndc_targets',
        includes: [:indicators]
      }
      expect(@response).to match_response_schema('targets_with_indicators')
    end

    it 'responds with not found' do
      get :index, params: {
        section_slug: 'foobar', category_slug: 'ndc_targets'
      }
      expect(@response).to have_http_status(:not_found)
    end

    it 'responds with not found' do
      get :index, params: {
        section_slug: 'planning', category_slug: 'foobar'
      }
      expect(@response).to have_http_status(:not_found)
    end
  end
end
