module Api
  module V1
    class CategoriesController < ApiController
      before_action :load_section
      before_action :load_category, only: [:show]

      def index
        @categories = @section.categories.map do |category|
          category.to_hash(category_includes)
        end
        render json: @categories
      end

      def show
        render json: @category.to_hash(category_includes)
      end

      private

      def load_category
        @category = @section.find_category_by_slug(params[:slug])
        render json: {}, status: :not_found and return unless @category
      end

      def category_includes
        (params[:includes] || []).map(&:to_sym)
      end
    end
  end
end
