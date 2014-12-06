var JRM = function() {
	
	function init(){	
		registerAboutUsListeners();
		GoogleMaps.init();
		Search.init();
	}

	function registerAboutUsListeners(){
		$( "#michelPhoto" ).click(function() {
  			 window.location="https://www.linkedin.com/in/miguelangelcasanova";
		});
		$( "#vicentePhoto" ).click(function() {
  			 window.location="https://www.linkedin.com/in/vrdelpino"
		});
		
	}
	return {
		init: init
	};
	
}();
