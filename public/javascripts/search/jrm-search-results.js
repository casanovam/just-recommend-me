	
	function showSearchResults(activities){
		var dollar = '<span class="glyphicon glyphicon-euro" style="float:left"></span>';
		var star= '<span class="glyphicon glyphicon-star" style="float:right"></span>';
		var starEmpty='<span class="glyphicon glyphicon-star-empty" style="float:right"></span>';
		
		
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
			console.log("activity price: "+activities[i].price);
			console.log("activity score: "+ activities[i].score/activities[i].numVotes );
			console.log("activity scoreTotal: "+ activities[i].score);
			console.log("activity numVotes: "+ activities[i].numVotes);
			console.log("---------------------------------------");
			
			
			
			var content = activities[i].image.content;
			var type = activities[i].image.type;
			var stars="";
			var dollars="";
			var normScore=activities[i].score/activities[i].numVotes;
			
			for (d=0;d<activities[i].price;d++){
				dollars=dollars+dollar;
			}
			
			for (s2=normScore;s2<5;s2++){
				stars=stars+starEmpty;
			}
			
			for (s=0;s<normScore;s++){
				stars=stars+star;
			}
			
			

			
			var html = '<div class="brick size31"> <img class="activity-image" src="data:image/'+type+';base64,'+content+'"><div class="cover">  <h3>'+activities[i].name+'</h3><h4>'+activities[i].description+'</h4><h5>'+activities[i].link+'</h5><h4 style="margin: 10px">'+dollars+stars+'</h4></div></div>';wall.appendBlock(html);
			
		}
				
		wall.fitWidth();
		
		
	};

	