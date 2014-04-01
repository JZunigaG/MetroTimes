json.array! @times_scheduled_by_line do |times_scheduled|

	json.station_name @station.name


	json.line_name @line.name


	json.direction times_scheduled.direction


	json.periodicity times_scheduled.periodicity


	json.start_time_slot times_scheduled.start_time_slot.strftime('%H:%M')


	json.end_time_slot times_scheduled.end_time_slot.strftime('%H:%M')
	
end





