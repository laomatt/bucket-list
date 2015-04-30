class AddClassNameItems < ActiveRecord::Migration
  def change
    add_column :items, :class_name, :string, default: "item"
  end
end
