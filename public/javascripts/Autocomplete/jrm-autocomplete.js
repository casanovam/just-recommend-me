
$(function(){
	// Initializes typeahead
	$("#SearchBox").typeahead({
        source: cities,
        items: 5
    }); 
});


