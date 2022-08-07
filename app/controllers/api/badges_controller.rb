class Api::BadgesController < ApplicationController
    skip_before_action :authorize, only: :index
    
    def create
        badge = Badge.create(badge_params)
        render json: badge, status: :created
      end

    def index
        Badge.all
    def

    def show 
        badges = Badge.find_by(params[:completed])
    end
end

private 

def badge_params
    params.permit(:completed, :user_id, :activity_id)
    
end
end
