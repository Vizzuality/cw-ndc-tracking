module UserHelpers
  def init_api_user
    before(:each) do
      @api_user ||= FactoryBot.create(
        :user, country_iso_code: 'BRA', status: User::USER, password: 'foobar'
      )
    end
  end

  def init_admin
    before(:each) do
      @admin ||= FactoryBot.create(
        :user, country_iso_code: 'BRA', status: User::ADMIN
      )
    end
  end
end
