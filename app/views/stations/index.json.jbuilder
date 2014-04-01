json.array! @stations_nearby do |station|

	json.station_id station.id

	json.name station.name

	json.latitude station.latitude

	json.longitude station.longitude

	json.lines station.lines do |line|

		json.line_id line.id

		json.line_name line.name

	end
	
end





