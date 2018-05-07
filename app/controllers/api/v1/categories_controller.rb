module Api
  module V1
    class CategoriesController < ApiController
      before_action :load_report
      before_action :set_year
      before_action :load_static_section
      before_action :load_category, only: [:show]

      def index
        @categories = GetAllCategories.new(@report, @static_section).
          call(@year, serialisation_options)
        render json: @categories
      end

      def show
        render json: @category
      end

      private

      def load_category
        @category = GetCategory.new(@report, @static_section).
          call(params[:slug], @year, serialisation_options)
        render json: {}, status: :not_found and return unless @category
      end
    end
  end
end
