module Api
  module V1
    class IndicatorsController < ApiController
      before_action :load_report
      before_action :set_year
      before_action :load_static_section
      before_action :load_static_category
      before_action :load_static_target

      def index
        @indicators = GetAllIndicators.new(
          @report, @static_section, @static_category, @static_target
        ).call(@year)
        render json: @indicators
      end

      private

      def load_static_target
        @static_target = @static_category.find_target_by_slug(params[:target_slug])
        render json: {}, status: :not_found and return unless @static_target
      end
    end
  end
end
