json.array! @stations_nearby do |station|

	json.name station.name

	json.latitude station.latitude

	json.longitude station.longitude

	json.lines station.lines do |line|

		json.line_name line.name

	end
	
end





