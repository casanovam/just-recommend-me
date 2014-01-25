 	$(function() {
    	  $("#menu-close").click(function(e) {
              e.preventDefault();
              $("#sidebar-wrapper").toggleClass("active");
          });

          $("#menu-toggle").click(function(e) {
              e.preventDefault();
              $("#sidebar-wrapper").toggleClass("active");
          }); 
    	  
    	  
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

 	
 	$(function() {	
 		$("#DinnerCheckBox").click(function() {
 			if ($( "#DinnerCheckBox" ).hasClass( "active" ))
 				$(this).removeClass("active");
 			else
 				$(this).addClass("active");
 		});
 	});
 	
 	
 	$(function() {	
 		$("#MusicCheckBox").click(function() {
 			if ($( "#MusicCheckBox" ).hasClass( "active" ))
 				$(this).removeClass("active");
 			else
 				$(this).addClass("active");
 		});
 	});
 	

 	$(function() {	
 		$("#PubCheckBox").click(function() {
 			if ($( "#PubCheckBox" ).hasClass( "active" ))
 				$(this).removeClass("active");
 			else
 				$(this).addClass("active");
 		});
 	});
 	
 	
 	


 	$(function() {	
 		$("#OutsideCheckBox").click(function() {
 			if ($( "#OutsideCheckBox" ).hasClass( "active" ))
 				$(this).removeClass("active");
 			else
 				$(this).addClass("active");
 		});
 	});
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	