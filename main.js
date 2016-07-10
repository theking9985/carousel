$(document).ready(function() {

	// $("li:first").before($("li:last"));

    function matchImageWithDot(img, dot) {
    	if ($("li:nth-child(3) img").attr("src") == img) {
    		$(dot).addClass("active").siblings().removeClass("active");
    	}
    };   

    $("#right_arrow").click(function(){
        var leftIndent = parseInt($("ul").css("left")) - $("li").outerWidth(true);

        $("ul").animate({"left" : leftIndent}, function(){  
            $("li:last").after($("li:first"));   
            $("ul").css({"left" : "-30vw"});
            
            matchImageWithDot("1.jpeg", "#dot4");
            matchImageWithDot("2.jpeg", "#dot5");
            matchImageWithDot("3.jpeg", "#dot1");
            matchImageWithDot("4.jpeg", "#dot2");
            matchImageWithDot("5.jpeg", "#dot3");
        });
    });  

    $("#left_arrow").click(function(){  
        var leftIndent = parseInt($("ul").css("left")) + $("li").outerWidth(true);

        $("ul").animate({"left" : leftIndent}, function(){
	        $("li:first").before($("li:last"));
	        $("ul").css({"left" : "-30vw"});
            
            matchImageWithDot("1.jpeg", "#dot4");
            matchImageWithDot("2.jpeg", "#dot5");
            matchImageWithDot("3.jpeg", "#dot1");
            matchImageWithDot("4.jpeg", "#dot2");
            matchImageWithDot("5.jpeg", "#dot3");
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

  	// in progress matching dot with image
    // function matchDotWithImage(img, dot) {
    // 	console.log("here");
    // 	console.log($(this));
    // 	if ($(this).attr("id") == dot) {
    // 		console.log("there");
	   //      var leftIndent = parseInt($("ul").css("left")) - $("li").outerWidth(true);

	   //      $("ul").animate({"left" : leftIndent}, function(){  
	   //          $("li:last").after($("li:first"));   
	   //          $("ul").css({"left" : "-30vw"});
	   //      });    		
    // 	}
    // };

    // $("#dotDiv a").click(function() {
    // 	$(".active").removeClass("active");
    // 	$(this).addClass("active");
    // 	matchDotWithImage($(this).attr("id"), "1.jpeg");
    // 	matchDotWithImage($(this).attr("id"), "2.jpeg");
    // 	matchDotWithImage($(this).attr("id"), "3.jpeg");
    // 	matchDotWithImage($(this).attr("id"), "4.jpeg");
    // 	matchDotWithImage($(this).attr("id"), "5.jpeg");
    // });   
});  