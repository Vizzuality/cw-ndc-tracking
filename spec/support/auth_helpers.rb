module AuthHelpers
  def login_api_user(api_user = nil)
    init_api_user unless api_user
    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      sign_in (api_user || @api_user)
    end
  end

  def login_admin(admin = nil)
    init_admin unless admin
    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      sign_in (admin || @admin)
    end
  end
end
