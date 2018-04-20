module Api
  module V1
    class ApiController < ActionController::API
      rescue_from ActiveRecord::RecordNotFound, with: :resource_not_found

      def resource_not_found
        render json: {
          code: 404,
          status: 'resource not found'
        }, status: :not_found
      end

      def route_not_found
        render json: {
          code: 404,
          status: "#{request.params[:endpoint]} not found"
        }, status: :not_found
      end

      before_action :set_access_control_headers

      def set_access_control_headers
        headers['Access-Control-Allow-Origin'] = ENV['CORS_WHITELIST']
        headers['Access-Control-Allow-Methods'] = 'GET'
      end

      private

      def load_report
        @report = Report.find_or_create_by({}) # TODO
        render json: {}, status: :not_found and return unless @report
      end

      def set_year
        @year = params[:year]&.to_i || Date.today.year
      end

      def load_section
        @section = Static::Section.find_by_slug(params[:section_slug])
        render json: {}, status: :not_found and return unless @section
      end

      def load_category
        @category = @section.find_category_by_slug(params[:category_slug])
        render json: {}, status: :not_found and return unless @category
      end
    end
  end
end
