class Api::GuestsController < ApplicationController
  
    def show
     user = User.all
      render json: user
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end

end
