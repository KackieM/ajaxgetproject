$(document).ready(function() {




// console.log('Come ON KAT EXTENSION!!');

$(function(){
	$.getJSON("http://www.reddit.com/r/books.json", function(data){
		var booksData = data.data.children;
		var html = " ";
			for(var i=0, b=booksData.length; i<b; i++){
				var obj = booksData[i].data;
				var title = obj.title;
				var url = "http://www.reddit.com" + obj.permalink;
				html += '<li><a href=\"'+url+'\" target=\"_blank\"><p>'+title+'</p></a></li>'; 
			};
		
		htmlOutput(html);
});

});

function htmlOutput(html) {
	
	$(".books").html(html);

}

});
// Using YQL and JSONP
// $.ajax({
//     url: "http://query.yahooapis.com/v1/public/yql",
 
//     // the name of the callback parameter, as specified by the YQL service
//     jsonp: "callback",
 
//     // tell jQuery we're expecting JSONP
//     dataType: "jsonp",
 
//     // tell YQL what we want and that we want JSON
//     data: {
//         q: "select title,abstract,url from search.news where query=\"cat\"",
//         format: "json"
//     },
 
//     // work with the response
//     success: function( response ) {
//         console.log( response ); // server response
//     }
