class CreateStations < ActiveRecord::Migration
  def change
    create_table :stations do |t|

      t.string :name

      t.point :location,:geographic => true

      t.timestamps
    end

    add_index :stations,:location,using: :gist
  end
end
