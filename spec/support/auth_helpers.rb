module AuthHelpers
  def login_user(user = nil)
    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      sign_in user || FactoryBot.create(:user, is_admin: false)
    end
  end

  def login_admin
    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      sign_in FactoryBot.create(:user, is_admin: true)
    end
  end
end
