require 'rails_helper'

RSpec.describe Api::V1::CategoriesController, type: :controller do
  describe 'GET index' do
    it 'renders title and slug for each category' do
      get :index, params: {section_slug: 'planning'}
      expect(@response).to match_response_schema('categories')
    end

    it 'includes targets' do
      get :index, params: {section_slug: 'planning', includes: [:targets]}
      expect(@response).to match_response_schema('categories_with_targets')
    end
  end

  describe 'GET show' do
    it 'renders title and slug for category' do
      get :show, params: {section_slug: 'planning', slug: 'ndc_targets'}
      expect(@response).to match_response_schema('category')
    end

    it 'includes targets' do
      get :show, params: {section_slug: 'planning', slug: 'ndc_targets', includes: [:targets]}
      expect(@response).to match_response_schema('category_with_targets')
    end
  end
end
