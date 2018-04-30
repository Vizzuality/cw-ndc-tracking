require 'rails_helper'

RSpec.describe Api::V1::IndicatorsController, type: :controller do
  include_context 'report with categories'

  describe 'GET index' do
    it 'renders basic properties for each indicator' do
      get :index, params: {
        section_slug: 'planning', category_slug: 'ndc_targets', target_slug: 'ghg_target'
      }
      expect(@response).to match_response_schema('indicators')
    end

    it 'responds with not found' do
      get :index, params: {
        section_slug: 'foobar', category_slug: 'ndc_targets', target_slug: 'ghg_target'
      }
      expect(@response).to have_http_status(:not_found)
    end

    it 'responds with not found' do
      get :index, params: {
        section_slug: 'planning', category_slug: 'foobar', target_slug: 'ghg_target'
      }
      expect(@response).to have_http_status(:not_found)
    end

    it 'responds with not found' do
      get :index, params: {
        section_slug: 'planning', category_slug: 'ndc_targets', target_slug: 'foobar'
      }
      expect(@response).to have_http_status(:not_found)
    end
  end
end
