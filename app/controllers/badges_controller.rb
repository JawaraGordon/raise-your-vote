class BadgesController < ApplicationController

    def show 
        badges = Badge.find_by(params[:completed])
        
    end
end

private 

def badge_params
    params.permit(:completed, :user_id, :activity_id)
    end
end
