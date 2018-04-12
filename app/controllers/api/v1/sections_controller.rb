module Api
  module V1
    class SectionsController < ApiController
      def index
        @sections = Section.all(section_includes)
        render json: @sections
      end

      private

      def section_includes
        (params[:includes] || []).map(&:to_sym)
      end
    end
  end
end
