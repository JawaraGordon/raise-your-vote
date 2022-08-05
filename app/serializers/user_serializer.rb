class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digestimage_url, :bio, :age
end
