module Api
  module V1
    class ApiController < ActionController::API
      rescue_from ActiveRecord::RecordNotFound, with: :resource_not_found
      acts_as_token_authentication_handler_for User, fallback: :none

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
      before_action :authenticate_user!

      def set_access_control_headers
        headers['Access-Control-Allow-Origin'] = ENV['CORS_WHITELIST']
        headers['Access-Control-Allow-Methods'] = 'GET'
      end

      private

      def load_report
        @report = Report.find_or_create_by(user_id: current_user.id)
        render json: {}, status: :not_found and return unless @report
      end

      def set_year
        @year = params[:year]&.to_i || Date.today.year
      end

      def load_static_section
        @static_section = Static::Section.find_by_slug(params[:section_slug])
        render json: {}, status: :not_found and return unless @static_section
      end

      def load_static_category
        @static_category = @static_section.find_category_by_slug(params[:category_slug])
        render json: {}, status: :not_found and return unless @static_category
      end
    end
  end
end
