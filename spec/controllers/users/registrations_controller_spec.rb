require 'rails_helper'

RSpec.describe Users::RegistrationsController, type: :controller do
  context 'with devise auth' do
    login_api_user

    describe 'PUT update' do
      it 'updates name when current password not provided' do
        new_name = 'NEW NAME'
        expect {
          put :update, params: {user: {first_name: new_name}}
          @api_user.reload
        }.to change(@api_user, :first_name).to(new_name)
      end

      it 'updates password when current password provided' do
        new_password = 'NEW PASSWORD'
        expect {
          put :update, params: {
            user: {
              password: new_password,
              password_confirmation: new_password,
              current_password: 'foobar'
            }
          }
          @api_user.reload
        }.to change(@api_user, :encrypted_password)
      end

      it 'does not update password when current password not provided' do
        new_password = 'NEW PASSWORD'
        expect {
          put :update, params: {
            user: {
              password: new_password,
              password_confirmation: new_password
            }
          }
          @api_user.reload
        }.not_to change(@api_user, :encrypted_password)
      end
    end
  end

  context 'with token auth' do
    init_api_user
    before(:each) do
      request.env['devise.mapping'] = Devise.mappings[:user]
      headers = {
        'X-User-Email' => @api_user.email,
        'X-User-Token' => @api_user.authentication_token,
        'Accept' => 'application/json',
        'Content-Type' => 'application/json'
      }
      request.headers.merge! headers
    end

    describe 'GET profile' do
      it "retrieves current user's profile information" do
        get :profile
        expect(@response).to match_response_schema('user_profile')
      end
    end

    describe 'PUT update' do
      it 'updates name when current password not provided' do
        new_name = 'NEW NAME'
        expect {
          put :update, params: {user: {first_name: new_name}}
          @api_user.reload
        }.to change(@api_user, :first_name).to(new_name)
      end

      it 'updates password when current password provided' do
        new_password = 'NEW PASSWORD'
        expect {
          put :update, params: {
            user: {
              password: new_password,
              password_confirmation: new_password,
              current_password: 'foobar'
            }
          }
          @api_user.reload
        }.to change(@api_user, :encrypted_password)
      end

      it 'does not update password when current password not provided' do
        new_password = 'NEW PASSWORD'
        expect {
          put :update, params: {
            user: {
              password: new_password,
              password_confirmation: new_password
            }
          }
          @api_user.reload
        }.not_to change(@api_user, :encrypted_password)
      end
    end
  end
end
