class Api::BadgesController < ApplicationController
    skip_before_action :authorize, only: :index
    
    def create
        badge = Badge.create(badge_params)
        render json: badge, status: :created
      end

    def index
        badges = Badge.all
        render json: badges, status: :ok
    def

    def show 
        badges = Badge.find_by(params[:completed])
        render json: badges, status: :ok
    end
end

private 

def badge_params
    params.permit(:completed, :user_id, :activity_id, :name)
    
end
end
