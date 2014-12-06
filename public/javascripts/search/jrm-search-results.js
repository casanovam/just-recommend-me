
//TODO: refactor this
var JRMResults = function() {	

	var MAX_SCORE = 5;
	var MAX_ACTIVITIES_PER_PAGE = 10;

	function showSearchResults(activities){
		var wall = createWall();					
		for(i=0;i<Math.min(MAX_ACTIVITIES_PER_PAGE, activities.length);i++){ 
			var imageContent = extractImageContent( activities[i].image);			
			stars = generateElement('<span class="glyphicon glyphicon-star"/>', Math.min(MAX_SCORE, activities[i].score));
			var card = createCardComponent(activities[i].image.type, imageContent, stars, activities[i]);			
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

	function createCardComponent(imageType, imageContent, stars, activity){
		return '<div class="thumbnail  brick" style="width:250px;"><img style="width:310px;height:200px;" src="data:image/'+imageType+';base64,'+imageContent+'" alt=""><div class="">'+
                                + '<h4>45</h4>'
                                + '<h4><a href="'+activity.link+'">'+activity.name+'</a>'
                                + '</h4>'
                                + '<a target="_blank" href="'+activity.link+'">'+activity.description+'</a>'
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

	