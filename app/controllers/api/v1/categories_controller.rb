module Api
  module V1
    class CategoriesController < ApiController
      before_action :load_section

      def index
        @categories = @section.categories.map do |category|
          category.to_hash(category_includes)
        end
        render json: @categories
      end

      def show
        @category = @section.find_category_by_slug(params[:slug]).
          to_hash(category_includes)
        render json: @category
      end

      private

      def load_section
        @section = Section.find_by_slug(params[:section_slug])
        render status: :not_found and return unless @section
      end

      def category_includes
        (params[:includes] || []).map(&:to_sym)
      end
    end
  end
end
