class Api::BadgesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :destroy]
    
    def create
        badge = Badge.create(badge_params)
        render json: badge, status: :created
    end

    def index
        badges = Badge.all
        render json: badges, status: :ok
    end

        def show 
            badges = Badge.find(params[:id])
            render json: badges, status: :ok
        end
        

    def destroy
        badge = Badge.find(params[:id])
         badge.destroy
         head :no_content
    end


    private 

    def badge_params
        params.permit(:completed, :user_id, :activity_id, :name)
    
    end
 

end
