$(document).ready(function() {

	// $("li:first").before($("li:last"));

    function matchImageDot(img, dot) {
    	if ($("li:nth-child(3) img").attr("src") == img) {
    		$(dot).addClass("active").siblings().removeClass("active");
    	}
    }	

    $("#right_arrow").click(function(){
        var leftIndent = parseInt($("ul").css("left")) - $("li").outerWidth(true);

        $("ul").animate({"left" : leftIndent}, function(){  
            $("li:last").after($("li:first"));   
            $("ul").css({"left" : "-30vw"});
            
            matchImageDot("4.jpeg", "#dot2");
            matchImageDot("5.jpeg", "#dot3");
            matchImageDot("1.jpeg", "#dot4");
            matchImageDot("2.jpeg", "#dot5");
            matchImageDot("3.jpeg", "#dot1");


            // if ($("li:nth-child(3) img").attr("src") == "4.jpeg") {
            // 	$("#dot2").addClass("active").siblings().removeClass("active");
            // }
        });
    });  

    $("#left_arrow").click(function(){  
        var leftIndent = parseInt($("ul").css("left")) + $("li").outerWidth(true);

        $("ul").animate({"left" : leftIndent}, function(){
	        $("li:first").before($("li:last"));
	        $("ul").css({"left" : "-30vw"});
            
            matchImageDot("4.jpeg", "#dot2");
            matchImageDot("5.jpeg", "#dot3");
            matchImageDot("1.jpeg", "#dot4");
            matchImageDot("2.jpeg", "#dot5");
            matchImageDot("3.jpeg", "#dot1");
        });    


    });

    // not working dots
    // $("#dotDiv a").click(function() {
    // 	$(".active").removeClass("active");
    // 	$(this).addClass("active");
    // });


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