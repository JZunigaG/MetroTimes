'use strict';


var requestToServer = {

	getNearbyStations: function(lat,longi)
	{
		// Ruta
		var url = "http://localhost:3000/stations"

		var data = {latitude: lat,longitude: longi};

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




		for(elem = 0;elem < stations.length;elem++)
		{
			contentString = '';

			console.log(stations[elem].name + "-->" + stations[elem].latitude + "-->" + stations[elem].longitude);
			
			mapOptions = usersPositionManager.init_mapOptions(stations[elem]);

			marker = usersPositionManager.add_marker(usersPositionManager.v_map[0],
													 stations[elem].name,
													 mapOptions.center);

			contentString = '<article id="marker_section">';

			contentString = '<header><h2 style="color:red">Lines</h2></header">';

			for(line = 0;line < stations[elem].lines.length;line++)
			{
				lineName =  stations[elem].lines[line].line_name;

				contentString += ('<button onclick="usersPositionManager.prueba()">' + lineName +  '</button>' + '<br>' + '<br>');
			}

			contentString += '</article>';

			usersPositionManager.add_marker_Listener(marker,'click',contentString);
		}
	}
}
