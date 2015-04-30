class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|

      t.references :user

      t.string :title
      t.text :content

      t.boolean :done
      t.timestamps null: false
    end
  end
end
