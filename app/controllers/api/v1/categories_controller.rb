module Api
  module V1
    class CategoriesController < ApiController
      before_action :load_section
      before_action :load_category, only: [:show]

      def index
        @categories = GetAllCategories.new.call(@section, category_includes)
        render json: @categories
      end

      def show
        render json: @category
      end

      private

      def load_category
        @category = GetCategory.new.call(
          @section, params[:slug], category_includes
        )
        render json: {}, status: :not_found and return unless @category
      end

      def category_includes
        (params[:includes] || []).map(&:to_sym)
      end
    end
  end
end
