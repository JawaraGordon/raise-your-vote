class Activity < ApplicationRecord
    has_many :badges, dependent: :destroy
    has_many :users, through: :badges
end
