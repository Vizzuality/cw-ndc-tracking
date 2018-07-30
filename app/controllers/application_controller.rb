class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @is_production = Rails.env.production?
  end

  def access_denied(exception)
    if request.format.json?
      render json: {
        error: 'Authorisation error', message: exception.message
      }, status: :unauthorized
    else
      redirect_to admin_root_path, alert: exception.message
    end
  end

  # restrict access to admin module for non-admin users
  def authenticate_admin_user!
    redirect_to root_path unless current_user.is_admin?
  end

  # path for redirection after user sign_in, depending on user role
  def after_sign_in_path_for(resource)
    if resource.is_admin?
      admin_dashboard_path
    else
      root_path
    end
  end
end
