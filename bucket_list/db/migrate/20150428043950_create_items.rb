class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.references :list

      t.string :title
      t.text :content

      t.boolean :done
      t.timestamps null: false
    end
  end
end
