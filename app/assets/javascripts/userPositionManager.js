'use strict';



var usersPositionManager = 
{
	//v_stations: [],

	v_map: [],

	v_User: [],

	to_fill: function(object,latitude,longitude)
	{
		return {"object": object,"latitude": latitude,"longitude": longitude};
	},

	/*
	save: function(station)
	{
		this.v_stations.push(station);

		var data = JSON.stringify(this.v_stations);

		console.log("Save: " + data);

		window.localStorage.setItem("stations",data);
	},
	*/

	getGeolocation: function() 
	{
		if(!navigator.geolocation)
		{
			console.log("Geolocation are not supported");

			return;
		}

		navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
	},

	onSuccess: function(position)
	{
		console.log(position.coords.latitude,position.coords.longitude);

		var User = usersPositionManager.to_fill("User",position.coords.latitude,position.coords.longitude);


		if(usersPositionManager.v_User.length > 0)
		{
			usersPositionManager.v_User.pop();
		}

		usersPositionManager.v_User.push(User)

		usersPositionManager.userLocation(User);
	},

	onError: function(error)
	{
		alert("Error en GPS: "+ error);
	},

	init_mapOptions: function(object)
	{
		var mapOptions = { zoom: 15,center: new google.maps.LatLng(object.latitude,object.longitude)}; 

		return mapOptions;
	},
	
	add_map: function(mapOptions)
	{
		var map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);

		this.v_map.push(map); 

		return map;
	},

	add_marker: function(map,object,pos)
	{ 
		var marker = new google.maps.Marker({position: pos,
		      								 map: map,
		      								 title: object
		  									});

		return marker;
	},

	add_marker_infoWindow: function(contentString)
	{
		return new google.maps.InfoWindow({content: contentString,maxWidth: 300});
	},

	add_marker_Listener: function(marker,event,contentString)
	{
		var infoWindow = usersPositionManager.add_marker_infoWindow(contentString);

		google.maps.event.addListener(marker,event,function(){

			infoWindow.open(usersPositionManager.v_map[0],marker);	
		});
	},

	userLocation: function(user)
	{
		var initOptions = this.init_mapOptions(user);

		if(this.v_map.length === 0)
		{
			this.add_map(initOptions);
		}

		this.add_marker(this.v_map[0],user.object,initOptions.center);

		requestToServer.getNearbyStations(user.latitude,user.longitude);
	},

	getDistance: function()
	{
		var origin1 = new google.maps.LatLng(this.v_User[0].latitude,this.v_User[0].longitude);

		var destinationA = [];

		var destinationB = [];

		//var destinationA = new google.maps.LatLng(this.v_stations[0].latitude,this.v_stations[0].longitude);

		//var destinationB = new google.maps.LatLng(this.v_stations[1].latitude,this.v_stations[1].longitude);

		var service = new google.maps.DistanceMatrixService();

		service.getDistanceMatrix
			(
				{
			    	origins: [origin1],

			    	destinations: [destinationA,destinationB],

			    	travelMode: google.maps.TravelMode.WALKING,
		  	 	},
		  	 	this.distanceRequestProcessing
		  	);

	}, // End getDistance

	distanceRequestProcessing: function(response,status)
	{
		var origins 	 = [];
		var destinations = [];

		var i 		= 0;
		var results = 0;
		var j 		= 0;

		var element = null;

		var distance = "";
		var duration = "";
		var from 	 = "";
		var to 		 = "";


		if(status == google.maps.DistanceMatrixStatus.OK)
		{
			origins = response.originAddresses;

			destinations = response.destinationAddresses;

			for(i = 0;i < origins.length;i++)
			{
				results = response.rows[i].elements;

				for(j = 0;j < results.length;j++)
				{
					element = results[j];

					distance = element.distance.text;

					duration = element.duration.text;

					from = origins[i];

					to = destinations[j];

					console.log(distance + " " + duration + " " + from + " " + to)
				}
			}
		}

	} // End distanceRequestProcessing

	,

	prueba: function()
	{
		console.log("Boton de linea pulsado ")
		Lungo.Router.section("second")
	}

} // End usersPositionManager

