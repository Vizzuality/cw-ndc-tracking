module Api
  module V1
    class SectionsController < ApiController
      before_action :load_report
      before_action :set_year
      before_action :load_static_section, only: [:show]

      def index
        @static_sections = GetAllSections.new(@report).
          call(@year, serialisation_options)
        render json: @static_sections
      end

      def show
        render json: @static_section
      end

      private

      def load_static_section
        @static_section = GetSection.new(@report).
          call(params[:slug], @year, serialisation_options)
        render json: {}, status: :not_found and return unless @static_section
      end
    end
  end
end
