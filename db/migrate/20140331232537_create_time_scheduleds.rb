class CreateTimeScheduleds < ActiveRecord::Migration

	def change

		create_table :time_scheduleds do |t|

		t.time :start_time_slot

		t.time :end_time_slot

		t.string :periodicity

		t.string :direction

		t.timestamps
		end
		
	end

end
