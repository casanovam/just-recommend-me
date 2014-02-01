/*
			function showSearchResults(){
				
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

				
				for(var c=0; c<12;++c)
				{
					var html = '<div class="brick size31"><div class="cover"> <h3>Aloha</h3> </div></div>';
					wall.appendBlock(html);
				}
				
				wall.fitWidth();
			}
*/


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

		console.log("Activites: ");
		for(var a in activities)
		{
				console.log(activities[a].name);
				console.log(activities[a].description);
		}
				
		wall.fitWidth();
		
		
	}

	