class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.boolean :completed
      t.string :date
      t.text :notes

      t.timestamps
    end
  end
end
