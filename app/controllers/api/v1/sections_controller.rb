module Api
  module V1
    class SectionsController < ApiController
      before_action :load_section, only: [:show]

      def index
        @sections = Section.all.map do |section|
          section.to_hash(section_includes)
        end
        render json: @sections
      end

      def show
        render json: @section.to_hash(section_includes)
      end

      private

      def load_section
        @section = Section.find_by_slug(params[:slug])
        render json: {}, status: :not_found and return unless @section
      end

      def section_includes
        (params[:includes] || []).map(&:to_sym)
      end
    end
  end
end
