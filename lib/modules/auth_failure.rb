class AuthFailure < Devise::FailureApp
  def redirect_url
    new_user_session_url
  end

  # You need to override respond to eliminate recall
  def respond
    if http_auth?
      http_auth
    elsif request.format.json?
      render json: {error: 'Authentication error'}, status: :unauthorized
    else
      redirect
    end
  end
end
