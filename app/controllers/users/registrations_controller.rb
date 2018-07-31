# frozen_string_literal: true

# rubocop:disable Style/ClassAndModuleChildren
class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  protect_from_forgery with: :null_session, only: :json_request?
  skip_before_action :authenticate_scope!, if: :json_request?
  acts_as_token_authentication_handler_for User,
                                           fallback: :exception,
                                           if: :json_request?,
                                           except: [:new, :create, :cancel]

  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  def profile
    respond_with current_user
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(
      :sign_up, keys: [:first_name, :last_name]
    )
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.permit(
      :account_update, keys: [:first_name, :last_name]
    )
  end

  def after_update_path_for(resource)
    if resource.is_admin?
      admin_user_path(resource)
    else
      edit_user_registration_path
    end
  end

  def update_resource(resource, params)
    if params[:password].present?
      resource.update_with_password(params)
    else
      resource.update_without_password(params.except(:current_password))
    end
  end

  private

  def json_request?
    request.format.json?
  end
end
# rubocop:enable Style/ClassAndModuleChildren
