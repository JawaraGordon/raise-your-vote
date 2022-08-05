class CreateBadges < ActiveRecord::Migration[7.0]
  def change
    create_table :badges do |t|
      t.boolean :completed
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
