var Search = function() {
	
	var url = "/search";
	
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
		        2000);
	}
	
	return {
		init: init
	};
	
}();