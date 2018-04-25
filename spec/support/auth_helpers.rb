module AuthHelpers
  def login_user
    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      sign_in FactoryBot.create(:user)
    end
  end

  def login_admin
    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      sign_in FactoryBot.create(:user, is_admin: true)
    end
  end
end
