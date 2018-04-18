module Api
  module V1
    class SectionsController < ApiController
      def index
        @sections = Section.all.map do |section|
          section.to_hash(section_includes)
        end
        render json: @sections
      end

      def show
        @section = Section.find_by_slug(params[:slug]).
          to_hash(section_includes)
        render json: @section
      end

      private

      def section_includes
        (params[:includes] || []).map(&:to_sym)
      end
    end
  end
end
