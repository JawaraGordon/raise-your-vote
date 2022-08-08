class BadgeSerializer < ActiveModel::Serializer
  attributes :id, :completed, :name
  has_one :user
  has_one :activity
end
