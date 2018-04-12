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
end
