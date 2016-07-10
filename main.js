$(document).ready(function() {

	// $("li:first").before($("li:last"));
    


    $("#right_arrow").click(function(){
        var leftIndent = parseInt($("ul").css("left")) - $("li").outerWidth(true);

        $("ul").animate({"left" : leftIndent}, function(){  
            $("li:last").after($("li:first"));   
            $("ul").css({"left" : "-30vw"});
        });
    });  

    $("#left_arrow").click(function(){  
        var leftIndent = parseInt($("ul").css("left")) + $("li").outerWidth(true);

        $("ul").animate({"left" : leftIndent}, function(){
	        $("li:first").before($("li:last"));
	        $("ul").css({"left" : "-30vw"});
        });    
    });


    	// carousel keeps sliding infinite

  //   function checkSize() {
  //   	if ($("h1").css("font-size") == "40px") {
  //   		console.log("checkSize running");
		//     $("#right_arrow").click(function(){
		//         var leftIndent = parseInt($("ul").css("left")) - $("li").outerWidth(true);

		//         $("ul").animate({"left" : leftIndent}, function(){  
		//             $("li:last").after($("li:first"));   
		//             $("ul").css({"left" : "-40vw"});
		//         });
		//     });  

		//     $("#left_arrow").click(function(){  
		//         var leftIndent = parseInt($("ul").css("left")) + $("li").outerWidth(true);

		//         $("ul").animate({"left" : leftIndent}, function(){
		// 	        $("li:first").before($("li:last"));
		// 	        $("ul").css({"left" : "-40vw"});
		//         });    
		//     });
		// }
  //   };

  //   $(window).resize(checkSize);
});  