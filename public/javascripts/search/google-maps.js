var GoogleMaps = function() {
		
	var map;

	function update(city) {
	  
	  var city = new google.maps.LatLng(CityLoc[city].location[0], CityLoc[city].location[1])
	  map = new google.maps.Map(document.getElementById("map"), {
	    center: city,
	    zoom: 12
	  });
	}
	
	return {
		update: update
	};
	
}();