'use strict';

//var url = "http://localhost:8080/myService";


var requestToServer = {

	getNearbyStations: function(lat,longi)
	{
		// Ruta
		var url = "http://localhost:3000/stations"

		var data = {latitude: lat,longitude: longi};

		Lungo.Service.json(url,data,this.parseResponse);
	},

	parseResponse: function(result)
	{
		console.log("Get Response From Server");
		console.log(result);
	}
}
