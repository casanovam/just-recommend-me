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
            success: searchSuccess
        });
	}
	
	function getActivity(selector){
		
		return $(selector).hasClass("active");
	}
	
	function searchSuccess(){
		
		 $('html, body').animate(
				 {scrollTop: $("#searchResults").offset().top}, 
				  animationTime);
	}
	
	return {
		init: init
	};
	
}();