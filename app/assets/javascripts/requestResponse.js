'use strict';



// Do request to rails server for nearby stations and lines data times(time_scheduleds)
// Request and response are in JSON format

var requestToServer = {

	// Get nearby stations,request to rails server with route /stations
	getNearbyStations: function(_latitude,_longitude)
	{
		var url = ""

		var data = {};



		// Route
		url = "http://localhost:3000/stations"

		data = {latitude: _latitude,longitude: _longitude};

		Lungo.Service.json(url,
						   data,
						   this.parseNearbyStations);
	},

	// Parse response of nearby station(JSON with stations data(id,name,latitude,longitude))
	parseNearbyStations: function(stations)
	{
		var elem = 0;

		var marker = null;

		var contentString = '';





		if(stations.length > 0)
		{
			for(elem = 0;elem < stations.length;elem++)
			{
				contentString = '';

				//console.log(stations[elem].station_id + "_" + stations[elem].name + "_" + stations[elem].latitude + "_" + stations[elem].longitude);
				
				// Add station marker with custom image	
				marker = requestToServer.addStationMarker(stations[elem]);	

				// Create InfoWindow from stations,insert a button by station-line with onclick event
				// to request Lines data times

				contentString = requestToServer.createInfoWindow(stations[elem]);

				if(marker != null && contentString != "")
				{ 
					usersPositionManager.add_marker_Listener(marker,
															 'click',
															 contentString);
				}	

			} // End for(elem = 0;

			// Add station marker with custom image	
			usersPositionManager.add_marker_user();

		} // End if(stations.length > 0)
	},

	// Add custom station marker to map
	addStationMarker: function(station)
	{
		var image = ""

		var mapOptions = null;
		var marker 	   = null;



		mapOptions = usersPositionManager.init_mapOptions(station);

		image = $$("#main_section").data('marker-station');

		marker = usersPositionManager.add_marker(mapOptions.center,
												 usersPositionManager.v_map[0],
												 station.name,
												 image);

		return marker;
	},

	// Create Info Window(article with one button on click event to request Lines Data Times)
	// Request parameters -->station_id,lineId,lineName
	createInfoWindow: function(station)
	{
		var line   = 0;
		var lineId = 0;

		var lineName 	  = "";
		var contentString = "";




		if(station.lines.length > 0)
		{ 
			contentString = '<article id="marker_section">';

			contentString = '<header><h2 style="color:red">Lines</h2></header">';

			for(line = 0;line < station.lines.length;line++)
			{
				lineName = station.lines[line].line_name;

				lineId = station.lines[line].line_id;

				contentString += ('<button onclick="requestToServer.getLinesDataTimes(' + station.station_id + ',' + lineId + ',' + '\'' + lineName + '\')">' + lineName +  '</button>' + '<br>' + '<br>');
			}

			contentString += '</article>';
		}

		return contentString;
	},

	// Get Lines Data Times ,request JSON to rails server with route /stations/:station_id/lines/:id
	getLinesDataTimes: function(_idStation,
								_idLine,
								_lineName)
	{
		var date 		  = "";
		var formattedTime = "";
		var url 		  = "";

		var data = {};




		date = new Date();

		formattedTime = date.getHours() + ':' + date.getMinutes();

		url = "http://localhost:3000/stations/" + _idStation + "/lines/" + _idLine;

		data = {current_time: formattedTime};

		//console.log("Boton de linea pulsado " + _idStation + "_" + _idLine + "_" + _lineName + "_" + formattedTime);

		Lungo.Service.json(url,
						   data,
						   this.parseLinesDataTimes);
	},
	
	// Manage Lines Data Times response.Data received in JSON format: station name,line name,line direction,
	// line start_time_slot,line end_time_slot,line periodicity.
	// A article content is created dinamically with quoJS commands.Create an unordered list with Lungo sintax.
	parseLinesDataTimes: function(linesData)
	{
		var nData = 0;





		if(linesData.length <= 0)
		{
			return;
		}

		//console.log("Received lines Data....." + linesData);

		$$("#linesdata").empty();

		$$("#linesdata").append('<ul><li.theme><strong><h2>' + linesData[0].line_name + 'Station: ' + linesData[0].station_name + '</h2></li>');

		for(nData = 0;nData < linesData.length;nData++)
		{
			$$("#linesdata").append('<li><h4>Direction: ' + linesData[nData].direction + '<h4></li>');

			$$("#linesdata").append('<li.theme><h5>Time Slot: From ' + linesData[nData].start_time_slot + ' to ' + linesData[nData].end_time_slot + '</h5></li>');

			$$("#linesdata").append('<li.theme><h5>Periodicity: ' + linesData[nData].periodicity + '</h5></li>');
		}

		$$("#linesdata").append('</ul>');

		Lungo.Router.section("second");
	}

} // End requestToServer
