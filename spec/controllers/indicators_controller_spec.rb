require 'rails_helper'

RSpec.describe Api::V1::IndicatorsController, type: :controller do
  include_context 'report with categories'
  login_user(@api_user)

  describe 'GET index' do
    it 'renders basic properties for each indicator' do
      get :index, params: {
        section_slug: 'planning',
        category_slug: 'ndc_targets',
        target_slug: 'ghg_target'
      }
      expect(@response).to match_response_schema('indicators')
    end

    it 'responds with not found' do
      get :index, params: {
        section_slug: 'foobar',
        category_slug: 'ndc_targets',
        target_slug: 'ghg_target'
      }
      expect(@response).to have_http_status(:not_found)
    end

    it 'responds with not found' do
      get :index, params: {
        section_slug: 'planning',
        category_slug: 'foobar',
        target_slug: 'ghg_target'
      }
      expect(@response).to have_http_status(:not_found)
    end

    it 'responds with not found' do
      get :index, params: {
        section_slug: 'planning',
        category_slug: 'ndc_targets',
        target_slug: 'foobar'
      }
      expect(@response).to have_http_status(:not_found)
    end
  end

  describe 'PATCH update' do
    let(:category_slug) { 'ndc_targets' }
    let(:target_slug) { 'ghg_target' }
    let(:category) {
      @default_report.categories.where(
        slug: category_slug, section_slug: tracking_section.slug
      ).first
    }
    let(:target) {
      category.targets.where(slug: target_slug).first
    }
    let(:indicator) {
      target.indicators.where(slug: 'quantification_of_ghg_target').first
    }

    it 'updates values' do
      patch :update, params: {
        section_slug: tracking_section.slug,
        category_slug: category_slug,
        target_slug: target_slug,
        id: indicator.id,
        indicator: {value: {value: 10, label: 'Value'}}
      }
      expect(@response).to have_http_status(:success)
    end

    it 'does not update values' do
      patch :update, params: {
        section_slug: tracking_section.slug,
        category_slug: category_slug,
        target_slug: target_slug,
        id: indicator.id,
        indicator: {value: {value: 10, label: 'zonk'}}
      }
      expect(@response).to have_http_status(:unprocessable_entity)
    end
  end
end
