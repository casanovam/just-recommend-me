var Search = function() {
	
	var url = "/search";
	var animationTime = 1200;
	
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
                city: getSearchValue()
            },
            cache: false,
            traditional: true,
            success: searchSuccess
        });
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