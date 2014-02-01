			$(function() {
				var wall = new freewall("#freewall");
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
				
				var html = '<div class="brick size21" style="background-color: rgb(243, 156, 18)"><div class="cover"> <h3>Aloha</h3> </div></div>';
				wall.appendBlock(html);
				var html = '<div class="brick size21" style="background-color: rgb(192, 57, 43)"><div class="cover"> <h3>Aloha2</h3> </div></div>';
				wall.appendBlock(html);
	
			});