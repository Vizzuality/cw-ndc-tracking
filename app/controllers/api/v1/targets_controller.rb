module Api
  module V1
    class TargetsController < ApiController
      before_action :load_report
      before_action :set_year
      before_action :load_static_section
      before_action :load_static_category

      def index
        @targets = GetAllTargets.new(@report, @static_section, @static_category).
          call(@year)
        render json: @targets
      end
    end
  end
end
