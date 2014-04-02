class TimeScheduled < ActiveRecord::Base

	belongs_to :lines
	
	# scope to filter time_slots for current_time order by start_time_slot,end_time_slot and limit to four top rows
	scope :getLinesDataBySlot,lambda(){ |current_time|

 		where(["(start_time_slot >= ? and end_time_slot >= ?) or (start_time_slot <= ? and end_time_slot >= ?)",current_time,current_time,current_time,current_time]).order(:start_time_slot,:end_time_slot,:direction).limit(4)

	}


end
