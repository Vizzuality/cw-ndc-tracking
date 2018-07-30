require 'rails_helper'

RSpec.describe Admin::UsersController, type: :controller do
  context 'when logging in as admin' do
    login_admin
    describe 'GET index' do
      it 'is successful' do
        get :index
        expect(response).to have_http_status(:success)
      end
    end
  end

  context 'when logging in as API user' do
    login_api_user
    describe 'GET index' do
      it 'redirects to root path' do
        get :index
        expect(response).to redirect_to(root_url)
      end
    end
  end
end
