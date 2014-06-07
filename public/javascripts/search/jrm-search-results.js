	
var JRMResults = function() {	

	function showSearchResults(activities){
		var dollar = '<span class="glyphicon glyphicon-euro" style="float:left; color:rgb(16, 124, 16)"></span>';
		var star= '<span class="glyphicon glyphicon-star" style="float:right;color:rgb(235, 160, 24)"></span>';
		var starEmpty='<span class="glyphicon glyphicon-star-empty" style="float:right;color:rgb(235, 160, 24)"></span>';
		
		
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
		
		for(i=0;i<Math.min(6,activities.length);i++){ 

			var content = "";
			if (typeof(retweeted_status) !== "undefined"){
				content = activities[i].image.content;
			}

			var type = activities[i].image.type;
			var stars="";
			var dollars="";
			var normScore=activities[i].score/activities[i].numVotes;
			var lat = activities[i].location[0];
			var lng = activities[i].location[1];
			
			for (d=0;d<activities[i].price;d++){
				dollars=dollars+dollar;
			}
			
			for (s2=normScore;s2<5;s2++){
				stars=stars+starEmpty;
			}
			
			for (s=0;s<normScore;s++){
				stars=stars+star;
			}

			var html = '<div class="activity brick size31" lat="'+lat+'" lng="'+lng+'"> <img class="activity-image" src="data:image/'+type+';base64,'+content+'"><div class="cover">  <h3>'+activities[i].name+'</h3><h4>'+activities[i].description+'</h4><a href="'+activities[i].link+'" class="activity-link">'+activities[i].link+'</a><h4 style="margin: 10px">'+dollars+stars+'</h4></div></div>';
			wall.appendBlock(html);
			
		}
		attachClickHandlers();
		wall.fitWidth();
		
	};

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

	