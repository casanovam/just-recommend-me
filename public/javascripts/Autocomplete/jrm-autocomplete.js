$(function(){
	// Initializes typeahead
	$("#SearchBox").typeahead({
        source: cities.JRMCities,
        items: 5
    }); 
});


