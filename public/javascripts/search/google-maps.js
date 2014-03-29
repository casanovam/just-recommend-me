var GoogleMaps = function() {
		
	var map;
	var DEFAULT_CITY = "dublin";
	
	function update(city) {
	  
	  var city = new google.maps.LatLng(CityLoc[city].location[0], CityLoc[city].location[1])
	  map = new google.maps.Map(document.getElementById("map"), {
	    center: city,
	    zoom: 12,
	    scrollwheel: false
	  });
	}
	
	function init(){
		var city = new google.maps.LatLng(CityLoc[DEFAULT_CITY].location[0], CityLoc[DEFAULT_CITY].location[1])
		map = new google.maps.Map(document.getElementById("map"), {
		    center: city,
		    zoom: 12,
		    scrollwheel: false
		  });
	}
	
	return {
		init: init,
		update: update
	};
	
}();