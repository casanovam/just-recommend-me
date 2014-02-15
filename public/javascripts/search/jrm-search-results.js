	
	function showSearchResults(activities){
				
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
		for(i=0;i<activities.length;i++){ 
			
			var html = '<div class="brick size31"><div class="cover"> <h3>'+activities[i].name+'</h3><h4>'+activities[i].description+'</h4> </div></div>';
			wall.appendBlock(html);
			
		}
				
		wall.fitWidth();
		
		
	};

	