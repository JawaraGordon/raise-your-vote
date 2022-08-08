class Api::ActivitiesController < ApplicationController

    def index
        activity = Activity.all
        render json: activity, status: :ok
    end

    def show
        activity = Activity.find_by(params[:id])
        render json: activity, status: :ok
    end

    private 

def activity_params
    params.permit(:id, :name,)
end

end
