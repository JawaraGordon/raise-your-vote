class UsersController < ApplicationController
    before_action :authorize_user, except: [:create]

    def index 
        render json: User.all
    end

    def show 
        user = User.find_by(id:params[:id])
        if user 
            render json: user
            # , serializer: UserActivitiesSerializer
        else 
            render json: {error: "No user found"}
    end
end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else 
            render json: {error: ["validation errors"]}, status: :unprocessable_entity
    end
end

    private
    def user
        params.permit(:username, :password, :image_url, :bio, :age)  
    end
end
