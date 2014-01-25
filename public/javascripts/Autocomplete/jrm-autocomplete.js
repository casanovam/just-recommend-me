$(function(){
	// Initializes typeahead
	$("#SearchBox").typeahead({
        source: cities.JRMCities,
        items: 5,
        matcher:function (item) 
        {
        	if (item.toLowerCase().indexOf(this.query.trim().toLowerCase()) == 0) {
        		return true;
        	}
        }
    }); 
});


