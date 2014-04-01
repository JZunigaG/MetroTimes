class CreateLinesStations < ActiveRecord::Migration
	def change
		create_table :lines_stations,id: false do |t|

			t.references :line

			t.references :station

			t.timestamps
		end
	end
end
