class AddNameToBadge < ActiveRecord::Migration[7.0]
  def change
    add_column :badges, :name, :string
  end
end
