require 'rails_helper'

RSpec.describe Api::V1::SectionsController, type: :controller do
  describe 'GET index' do
    it 'renders title and slug for each section' do
      get :index
      expect(@response).to match_response_schema('sections')
    end

    it 'includes categories' do
      get :index, params: {includes: [:categories]}
      expect(@response).to match_response_schema('sections_with_categories')
    end

    it 'includes targets' do
      get :index, params: {includes: [:targets]}
      expect(@response).to match_response_schema('sections_with_targets')
    end
  end

  describe 'GET show' do
    it 'renders title and slug for section' do
      get :show, params: {slug: 'planning'}
      expect(@response).to match_response_schema('section')
    end

    it 'includes categories' do
      get :show, params: {slug: 'planning', includes: [:categories]}
      expect(@response).to match_response_schema('section_with_categories')
    end

    it 'includes targets' do
      get :show, params: {slug: 'planning', includes: [:targets]}
      expect(@response).to match_response_schema('section_with_targets')
    end

    it 'responds with not found' do
      get :show, params: {slug: 'foobar'}
      expect(@response).to have_http_status(:not_found)
    end
  end
end
