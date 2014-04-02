'use strict';


var requestToServer = {

	getNearbyStations: function(_latitude,_longitude)
	{
		// Ruta
		var url = "http://localhost:3000/stations"

		var data = {latitude: _latitude,longitude: _longitude};

		Lungo.Service.json(url,data,this.parseNearbyStations);
	},

	parseNearbyStations: function(stations)
	{
		var elem = 0;

		var line = 0;

		var mapOptions = null;

		var marker = null;

		var contentString = " "

		var lineName = ""

		var lineId = 0




		for(elem = 0;elem < stations.length;elem++)
		{
			contentString = '';

			console.log(stations[elem].station_id + "_" + stations[elem].name + "_" + stations[elem].latitude + "_" + stations[elem].longitude);
			
			mapOptions = usersPositionManager.init_mapOptions(stations[elem]);

			var image = $$("#main_section").data('marker-station');

			marker = usersPositionManager.add_marker(mapOptions.center,
													 usersPositionManager.v_map[0],
													 stations[elem].name,
													 image);

			contentString = '<article id="marker_section">';

			contentString = '<header><h2 style="color:red">Lines</h2></header">';

			for(line = 0;line < stations[elem].lines.length;line++)
			{
				lineName =  stations[elem].lines[line].line_name;

				lineId = stations[elem].lines[line].line_id;

				contentString += ('<button onclick="requestToServer.getLinesDataTimes(' + stations[elem].station_id + ',' + lineId + ',' + '\'' + lineName + '\')">' + lineName +  '</button>' + '<br>' + '<br>');
			}

			contentString += '</article>';

			usersPositionManager.add_marker_Listener(marker,'click',contentString);
		}

		usersPositionManager.add_marker_user();
	}
	,
	getLinesDataTimes: function(_idStation,_idLine,_lineName)
	{
		var date = new Date();

		var formattedTime = date.getHours() + ':' + date.getMinutes();

		var url = "http://localhost:3000/stations/" + _idStation + "/lines/" + _idLine;

		var data = {current_time: formattedTime};



		console.log("Boton de linea pulsado " + _idStation + "_" + _idLine + "_" + _lineName + "_" + formattedTime);

		Lungo.Service.json(url,data,this.parseLinesDataTimes);
	}
	,
	parseLinesDataTimes: function(linesData)
	{
		var nData = 0;


		if(linesData.length <= 0)
		{
			return;
		}

		console.log("Received lines Data....." + linesData);

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
}
