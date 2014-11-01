
//TODO: refactor this
var JRMResults = function() {	

	function showSearchResults(activities){
		var wall = createWall();					
		for(i=0;i<Math.min(10,activities.length);i++){ 
			var imageContent = extractImageContent( activities[i].image);
			var normScore = normalizeScore(activities[i].score, activities[i].numVotes);
			euros = generateElement('&euro;', activities[i].price);
			stars = generateElement('<span class="glyphicon glyphicon-star"/>', normScore);
			var card = createCardComponent(activities[i].image.type, imageContent, euros, stars, activities);			
			wall.appendBlock(card);			
		}
		attachClickHandlers();		
	};

	function extractImageContent(image){
		var content = "";
		if (typeof(image) !== "undefined"){
			content = image.content;
		}
		return content;
	}

	function normalizeScore(score, votes){
		return  score / votes;
	}

	function createWall(){
		$("#freewall").html("");
		var wall=new freewall("#freewall");
		wall.reset({
					selector: '.brick',
					animate: true,
					cellW: 160,
					cellH: 160,
					delay: 50,
					onResize: function() {
						wall.fitWidth();
					}
				});
		wall.fitWidth();
		return wall;
	}
	
	function generateElement(element, n){
		var euros = "";
		for (d = 0; d < n; d++){
				euros=euros+element;
		}
		return euros;
	}

	function createCardComponent(imageType, imageContent, euros, stars, activities){
		return '<div class="thumbnail  brick"><img src="data:image/'+imageType+';base64,'+imageContent+'" alt=""><div class="">'+
                                + '<h4>'+euros+'</h4>'
                                + '<h4><a href="'+activities[i].link+'">'+activities[i].name+'</a>'
                                + '</h4>'
                                + '<a target="_blank" href="'+activities[i].link+'">'+activities[i].description+'</a>'
                            + '</div>'
                            + '<div class="ratings">'
                                + '<p>'
                                   + stars
                                + '</p>'
                            + '</div>'
                       + ' </div>';

	}

	function openActivity(e){
		window.location.href = $(e.toElement).text();
	}

	function attachClickHandlers(){

		$(".activity").on("click", centerMap);
	}

	function centerMap(e){
		var lat = $(e.toElement).closest(".activity").attr("lat");
		var lng = $(e.toElement).closest(".activity").attr("lng");
		GoogleMaps.center(lat, lng);
	}

	return {
		show: showSearchResults
	};


}();

	