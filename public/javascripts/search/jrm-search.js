var Search = function() {
	
	var url = "/search";
	var animationTime = 600;
	
	function init(){
		
		attachListeners();
		
	}
	
	function attachListeners(){
		
		$("#SearchButton").on("click", search);
		$(document).keypress(function(e) {
			console.log("e.which"+e.which );
		    if(e.which == 13) {
		    	search();
		    }
		});
	}
	
	function getSearchValue(){
		
		return $("#SearchBox").val();
	}
	
	function getActivity(selector){
		
		return $(selector).hasClass("active");
	}
	
	function updateGoogleMap(){
		
		
	}
	
	function moveToResults(){
		 $('html, body').animate(
				 {scrollTop: $("#searchResults").offset().top}, 
				  animationTime);
	}
	
	function search(){
		
		return $.ajax({
            url: url,
            data: {
                city: getSearchValue(),
                dinner: getActivity("#DinnerCheckBox"),
                music: getActivity("#MusicCheckBox"),
                pub: getActivity("#PubCheckBox"),
                outside: getActivity("#OutsideCheckBox")
            },
            cache: false,
            traditional: true,
            success: function(data){searchSuccess(data)}
            
        }).
        done();
	}
	
	function searchSuccess(data){
		//console.log("response data: "+data);
		//GoogleMaps.update();
		moveToResults()
	}
	
	return {
		init: init
	};
	
}();