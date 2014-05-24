var Search = function() {
	
	var url = "/search";
	var animationTime = 600;
	
	function init(){
		attachListeners();
	}
	
	function attachListeners(){
		
		$("#SearchButton").on("click", search);
		$(document).keypress(function(e) {
		    if(e.which == 13) {
		    	search();
		    }
		});
	}
	
	function getSearchValue(){
		
		return $("#SearchBox").val().toLowerCase();
	}
	
	function getActivity(selector){
		
		return $(selector).hasClass("active");
	}
	
	function moveToResults(){
		 $('html, body').animate(
				 {scrollTop: $("#searchResults").offset().top}, 
				  animationTime);
	}
	
	function search(){
		
		var city = getSearchValue();
		
		return $.ajax({
            url: url,
            data: {
                city: city,
                dinner: getActivity("#DinnerCheckBox"),
                music: getActivity("#MusicCheckBox"),
                pub: getActivity("#PubCheckBox"),
                outside: getActivity("#OutsideCheckBox")
            },
            cache: false,
            traditional: true,
            success: function(data){searchSuccess(data, city)}
            
        }).
        done();
	}
	

	function getActivity(selector){
		
		return $(selector).hasClass("active");
	}
	
	function uiUpdates(){
		
		$("#searchResults h1").text("");
		$("#about").attr("class","call-to-after-action");
		$("#about").attr("class","call-to-after-action");
		$("#about h3").text("");
	}
	
	function searchSuccess(data, city){
		
		var activities = $.parseJSON(data);
		uiUpdates();
		GoogleMaps.update(city, activities);
		moveToResults();
		JRMResults.show(activities);
		
	}
	
	return {
		init: init
	};
	
}();