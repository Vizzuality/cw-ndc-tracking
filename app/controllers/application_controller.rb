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
end
