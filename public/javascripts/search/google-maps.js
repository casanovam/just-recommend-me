var GoogleMaps = function() {
		
	var map;

	function update(city) {
	  
	  var city = new google.maps.LatLng(CityLoc[city].location[0], CityLoc[city].location[1])
	  map = new google.maps.Map(document.getElementById("map"), {
	    center: city,
	    zoom: 12
	  });

	  var layer = new google.maps.FusionTablesLayer({
	    query: {
	      select: 'address',
	      from: '1d7qpn60tAvG4LEg4jvClZbc1ggp8fIGGvpMGzA',
	      where: 'ridership > 5000'
	    }
	  });
	  //layer.setMap(map);
	}
	
	return {
		update: update
	};
	
}();