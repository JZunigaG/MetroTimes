class TimeScheduled < ActiveRecord::Base

	belongs_to :lines
	

	scope :getLinesDataBySlot,lambda(){ |current_time|

 		where(["(start_time_slot >= ? and end_time_slot >= ?) or (start_time_slot <= ? and end_time_slot >= ?)",current_time,current_time,current_time,current_time]).order(:start_time_slot,:end_time_slot).limit(4)

	}


end
