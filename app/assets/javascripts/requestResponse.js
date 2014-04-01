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

			console.log(stations[elem].id + "_" + stations[elem].name + "_" + stations[elem].latitude + "_" + stations[elem].longitude);
			
			mapOptions = usersPositionManager.init_mapOptions(stations[elem]);

			marker = usersPositionManager.add_marker(usersPositionManager.v_map[0],
													 stations[elem].name,
													 mapOptions.center);

			contentString = '<article id="marker_section">';

			contentString = '<header><h2 style="color:red">Lines</h2></header">';

			for(line = 0;line < stations[elem].lines.length;line++)
			{
				lineName =  stations[elem].lines[line].line_name;

				lineId = stations[elem].lines[line].line_id;

				contentString += ('<button onclick="requestToServer.getLinesDataTimes(' + stations[elem].id + ',' + lineId + ',' + '\'' + lineName + '\')">' + lineName +  '</button>' + '<br>' + '<br>');
			}

			contentString += '</article>';

			usersPositionManager.add_marker_Listener(marker,'click',contentString);
		}
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
		//Lungo.Router.section("second");

		console.log("Received lines Data....." + linesData);

	}
}
