	
	function showSearchResults(activities){
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
			console.log("activity image type: "+activities[i].image.type);
			var content = activities[i].image.content;
			var type = activities[i].image.type;
			var html = '<div class="brick size31"> <img class="activity-image" src="data:image/'+type+';base64,'+content+'"><div class="cover">  <h3>'+activities[i].name+'</h3><h4>'+activities[i].description+'</h4><h5>'+activities[i].link+'</h5>  </div></div>';wall.appendBlock(html);
			
		}
				
		wall.fitWidth();
		
		
	};

	