module Api
  module V1
    class SectionsController < ApiController
      before_action :load_report
      before_action :load_section, only: [:show]

      def index
        @sections = GetAllSections.new(@report).
          call(section_includes)
        render json: @sections
      end

      def show
        render json: @section
      end

      private

      def load_report
        @report = Report.find_or_create_by({}) # TODO
      end

      def load_section
        @section = GetSection.new.call(params[:slug], section_includes)
        render json: {}, status: :not_found and return unless @section
      end

      def section_includes
        (params[:includes] || []).map(&:to_sym)
      end
    end
  end
end
