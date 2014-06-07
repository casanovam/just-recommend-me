var GoogleMaps = function() {

	var map;
	var DEFAULT_CITY = "dublin";

	function update(city, activities) {

	  var cityLoc = new google.maps.LatLng(CityLoc[city].location[0], CityLoc[city].location[1])
	  map = new google.maps.Map(document.getElementById("map"), {
	    center: cityLoc,
	    zoom: 12,
	    scrollwheel: false
	  });
	  markActivities(cityLoc, activities);
	}

	function init(){

		var cityLoc = new google.maps.LatLng(CityLoc[DEFAULT_CITY].location[0], CityLoc[DEFAULT_CITY].location[1])
		map = new google.maps.Map(document.getElementById("map"), {
		    center: cityLoc,
		    zoom: 12,
		    scrollwheel: false
		  });
		addMarker(cityLoc, DEFAULT_CITY);
	}

	function markActivities(loc, activities){


		for(i=0; i<Math.min(6,activities.length); i++) {

			var lat = latLng(activities[i].location[0], activities[i].location[1]);
			addMarker(lat, activities[i].name);
		}
	}

	function addMarker(lat, title){

		new google.maps.Marker({
		      position: lat,
		      map: map,
		      title: title
		  });
	}

	function latLng(x, y){

		return new google.maps.LatLng(x, y);
	}

	function setCenter(lat, lng){

		map.setCenter( latLng(lat, lng) );
	}
	

	return {
		init: init,
		update: update,
		center: setCenter
	};

}();
