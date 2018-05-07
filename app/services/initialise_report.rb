class InitialiseReport
  # @param user [User]
  # @param country_iso_code [String]
  def initialize(user, country_iso_code)
    @user = user
    @country_iso_code = country_iso_code
  end

  # @param years [Array<Integer>]
  # @param options [Hash]
  # @option options [Boolean] :force destroy / create
  def call(years, options = {})
    force = options[:force] || false
    @report = Report.find_by_user_id(@user.id)
    if @report
      @report.categories.delete_all if force
    else
      @report = Report.create(user_id: @user.id)
    end
    cw_values = GetIndicatorValuesForCountry.new.call(@country_iso_code)

    @report.initialize_data(
      years, force: options[:force], cw_values: cw_values
    )
    @report
  end
end
