'use strict';



var usersPositionManager = 
{
	v_map: [],

	v_User: [],

	// Create a hash object with latitude and longitude
	to_fill: function(object,
					  latitude,
					  longitude)
	{
		return {"object": object,"latitude": latitude,"longitude": longitude};
	},

	getGeolocation: function() 
	{
		if(!navigator.geolocation)
		{
			alert("Geolocation are not supported.");
			//console.log("Geolocation are not supported.");

			return;
		}

		// Two callbacks funtions to response successfully and error
		navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
	},

	// if geolocation response is true,create user location,store it in a map
	onSuccess: function(position)
	{
		var user = {};



		//console.log(position.coords.latitude,position.coords.longitude);

		user = usersPositionManager.to_fill("User",
											position.coords.latitude,
											position.coords.longitude);


		if(usersPositionManager.v_User.length > 0)
		{
			usersPositionManager.v_User.pop();
		}

		usersPositionManager.v_User.push(user)

		usersPositionManager.userLocation(user);
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

	// Add a custom marker in a google map with DROP animation
	add_marker: function(pos,
						 map,
						 object,
						 image)
	{ 
		var marker = new google.maps.Marker({position: pos,
		      								 map: map,
		      								 title: object,
		      								 animation: google.maps.Animation.DROP,
		      								 icon: image
		  									});

		return marker;
	},

	add_marker_infoWindow: function(contentString)
	{
		return new google.maps.InfoWindow({content: contentString,maxWidth: 300});
	},

	// when an onclick event ocurrs on a marker an infowindow is opened with lines by station 
	add_marker_Listener: function(marker,
								  event,
								  contentString)
	{
		var infoWindow = usersPositionManager.add_marker_infoWindow(contentString);

		google.maps.event.addListener(marker,event,function(){

			infoWindow.open(usersPositionManager.v_map[0],marker);	
		});
	},

	// Add user to map and request nearby stations to rails server with latitude and longitude
	userLocation: function(user)
	{
		var initOptions = this.init_mapOptions(user);

		if(this.v_map.length === 0)
		{
			this.add_map(initOptions);
		}

		requestToServer.getNearbyStations(user.latitude,user.longitude);
	},

	// Add user marker,getting custom marker image from main_section - marker-user property with quoJS sintax
	add_marker_user: function()
	{
		var image = $$("#main_section").data('marker-user');

		this.add_marker(this.v_map[0].center,
						this.v_map[0],
						this.v_User[0].object,
						image);

	},

	// Not yet used
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
	
	// Not yet used
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

} // End usersPositionManager

