'use strict';
/*
usersPositionManager.v_stations = JSON.parse(window.localStorage.getItem("stations")) || [];

var station1 = usersPositionManager.to_fill("Retiro",40.420328,-3.686262);

usersPositionManager.save(station1);

var station2 = usersPositionManager.to_fill("El Carmen",40.431891,-3.657594);

usersPositionManager.save(station2);



var mapOptions = usersPositionManager.init_mapOptions(station1);

usersPositionManager.add_map(mapOptions)

usersPositionManager.add_marker(usersPositionManager.v_map[0],station1.station, mapOptions.center);


var mapOptions2 = usersPositionManager.init_mapOptions(station2);

usersPositionManager.add_marker(usersPositionManager.v_map[0], station2.station, mapOptions2.center);
*/

usersPositionManager.getGeolocation();


//usersPositionManager.getDistance();