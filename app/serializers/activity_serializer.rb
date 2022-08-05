class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :completed, :date, :notes
end
