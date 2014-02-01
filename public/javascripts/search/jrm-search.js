var Search = function() {
	
	var url = "/search";
	var animationTime = 1200;
	
	function init(){
		
		attachListeners();
		
	}
	
	function attachListeners(){
		
		$("#SearchButton").on("click", search);
		$(document).keypress(function(e) {
			console.log("e.which"+e.which );
		    if(e.which == 13) {
		    	search();
		    }
		});
	}
	
	function getSearchValue(){
		
		return $("#SearchBox").val();
	}
	
	function search(){
		
		return $.ajax({
            url: url,
            data: {
                city: getSearchValue(),
                dinner: getActivity("#DinnerCheckBox"),
                music: getActivity("#MusicCheckBox"),
                pub: getActivity("#PubCheckBox"),
                outside: getActivity("#OutsideCheckBox")
            },
            cache: false,
            traditional: true,
            success: searchSuccess
        });
	}
	
	function getActivity(selector){
		
		return $(selector).hasClass("active");
	}
	
	function searchSuccess(){
		
		 $('html, body').animate(
				 {scrollTop: $("#searchResults").offset().top}, 
				  animationTime);
		 var activities= ({ "_id" : { "$oid" : "52752242b33e95e9ae9022bf"} , "name" : "Activity 1" , "description" : "Description 1" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.72462238135748 , -6.205008269659609] , "weather" : "good" , "durationHR" : 1.0 , "price" : 1.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 1" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 2" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]}, { "_id" : { "$oid" : "52752242b33e95e9ae9022c0"} , "name" : "Activity 2" , "description" : "Description 2" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.37322338891216 , -6.105251823551386] , "weather" : "good" , "durationHR" : 2.0 , "price" : 2.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 2" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 3" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]}, { "_id" : { "$oid" : "52752242b33e95e9ae9022c1"} , "name" : "Activity 3" , "description" : "Description 3" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.46503223848529 , -6.0183272317977545] , "weather" : "good" , "durationHR" : 3.0 , "price" : 3.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 3" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 4" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]}, { "_id" : { "$oid" : "52752242b33e95e9ae9022c2"} , "name" : "Activity 4" , "description" : "Description 4" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.41159569492564 , -6.01269028373006] , "weather" : "good" , "durationHR" : 4.0 , "price" : 4.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 4" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 5" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]}, { "_id" : { "$oid" : "52752242b33e95e9ae9022c3"} , "name" : "Activity 5" , "description" : "Description 5" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.35003003992141 , -6.2057007711840715] , "weather" : "good" , "durationHR" : 5.0 , "price" : 5.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 5" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 6" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]}, { "_id" : { "$oid" : "52752242b33e95e9ae9022c4"} , "name" : "Activity 6" , "description" : "Description 6" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.53323364082724 , -5.957574807712242] , "weather" : "good" , "durationHR" : 6.0 , "price" : 6.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 6" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 7" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]}, { "_id" : { "$oid" : "52752242b33e95e9ae9022c5"} , "name" : "Activity 7" , "description" : "Description 7" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.44959206145257 , -6.121404253877133] , "weather" : "good" , "durationHR" : 7.0 , "price" : 7.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 7" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 8" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]}, { "_id" : { "$oid" : "52752242b33e95e9ae9022c6"} , "name" : "Activity 8" , "description" : "Description 8" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.411836229050536 , -5.948503498732477] , "weather" : "good" , "durationHR" : 8.0 , "price" : 8.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 8" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 9" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]}, { "_id" : { "$oid" : "52752242b33e95e9ae9022c7"} , "name" : "Activity 9" , "description" : "Description 9" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.537540214387704 , -5.9906558686861695] , "weather" : "good" , "durationHR" : 9.0 , "price" : 9.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 9" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 10" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]}, { "_id" : { "$oid" : "52752242b33e95e9ae9022c8"} , "name" : "Activity 10" , "description" : "Description 10" , "city" : "Dublin" , "link" : "www.link.com" , "location" : [ 53.54191363693215 , -6.174231079685867] , "weather" : "good" , "durationHR" : 10.0 , "price" : 10.0 , "score" : 50.0 , "numVotes" : 120.0 , "lastReviews" : [ { "user_id" : "user 10" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 4.0} , { "user_id" : "user 11" , "comment" : "comment" , "date" : "01/01/2013" , "score" : 1.0}] , "tags" : [ "Sport" , "NoMoney"]});
		
		 showSearchResults(activities);
	}
	
	return {
		init: init
	};
	
}();