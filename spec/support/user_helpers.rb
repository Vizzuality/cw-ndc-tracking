module UserHelpers
  def init_api_user
    before(:each) do
      @api_user ||= FactoryBot.create(
        :user, country_iso_code: 'BRA', is_admin: false, password: 'foobar'
      )
    end
  end

  def init_admin
    before(:each) do
      @admin ||= FactoryBot.create(
        :user, country_iso_code: 'BRA', is_admin: true
      )
    end
  end
end
