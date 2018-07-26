require 'rails_helper'

RSpec.describe Users::RegistrationsController, type: :controller do
  login_api_user

  describe 'PUT update' do
    it 'updates name when current password not provided' do
      new_name = 'NEW NAME'
      expect {
        put :update, params: {user: {name: new_name}}
        @api_user.reload
      }.to change(@api_user, :name).to(new_name)
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
