module Api
  module V1
    class IndicatorsController < ApiController
      before_action :load_report
      before_action :set_year
      before_action :load_static_section
      before_action :load_static_category
      before_action :load_static_target
      before_action :load_indicator, only: [:update]

      def index
        @indicators = GetAllIndicators.new(
          @report, @static_section, @static_category, @static_target
        ).call(@year, serialisation_options)
        render json: @indicators
      end

      def update
        if @indicator.update_value(indicator_params[:value])
          render json: MergeStaticAndDynamicIndicator.new(
            @indicator.static_indicator, @indicator
          ).call(serialisation_options)
        else
          render json: {error: 'Update error'}, status: :unprocessable_entity
        end
      end

      private

      def load_static_target
        @static_target = @static_category.find_target_by_slug(
          params[:target_slug]
        )
        render json: {}, status: :not_found and return unless @static_target
      end

      def load_indicator
        @indicator = Indicator.find(params[:id])
        render json: {}, status: :not_found and return unless @indicator
      end

      def indicator_params
        # TODO: return error when incorrect payload
        params.require(:indicator).permit(value: [:value, :label])
      end
    end
  end
end
