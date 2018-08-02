# frozen_string_literal: true

# rubocop:disable Style/ClassAndModuleChildren
class Users::PasswordsController < Devise::PasswordsController
  respond_to :json
  protect_from_forgery with: :null_session,
                       only: proc { |c| c.request.format.json? }
end
# rubocop:enable Style/ClassAndModuleChildren
