require 'open-uri'

class GetIndicatorValuesForCountry
  def call(country_iso_code)
    response = open(ENV['CW_API_URL'] + 'ndcs?location=' + country_iso_code).read
    indicators = JSON.parse(response)['indicators']
    indicators.map do |indicator|
      indicator.slice('id', 'slug').merge(
        value: indicator['locations'][country_iso_code].first['value']
      ).symbolize_keys
    end
  end
end
