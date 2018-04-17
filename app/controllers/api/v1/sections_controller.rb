module Api
  module V1
    class SectionsController < ApiController
      def index
        @sections = Section.all(section_includes)
        render json: @sections
      end

      def show
        @section = Section.find_by_slug(params[:slug], section_includes)
        render json: @section
      end

      private

      def section_includes
        (params[:includes] || []).map(&:to_sym)
      end
    end
  end
end
