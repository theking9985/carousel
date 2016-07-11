$(document).ready(function() {

	// $("li:first").before($("li:last"));

	// dot moves when click on arrow
    function matchImageWithDot() {
		switch ($("li:nth-child(2) img").attr("src")) {
			case "1.jpeg":
				$("#dot5").addClass("active").siblings().removeClass("active");
				break;
			case "2.jpeg":
				$("#dot1").addClass("active").siblings().removeClass("active");
				break;
			case "3.jpeg":
				$("#dot2").addClass("active").siblings().removeClass("active");
				break;
			case "4.jpeg":
				$("#dot3").addClass("active").siblings().removeClass("active");
				break;
			case "5.jpeg":
				$("#dot4").addClass("active").siblings().removeClass("active");
				break;
		}
    };

    // click on arrow slides image 
    $(".arrows").click(function() {
    	var ulLeft = parseInt($("ul").css("left"));
    	var liWidth = $("li").outerWidth(true);
    	var arrowId = $(this).attr("id");

    	var leftIndent = arrowId == "right_arrow" ? ulLeft - liWidth : ulLeft + liWidth; 

		$("ul").animate({"left" : leftIndent}, function(){              
			arrowId == "right_arrow" ? $("li:last").after($("li:first")) : $("li:first").before($("li:last"));
            $("ul").css({"left" : -liWidth});
            matchImageWithDot();
        });    	
    });

  //   $(".arrows").click(function() {
  //   	var ulLeft = parseInt($("ul").css("left"));
  //   	var liWidth = $("li").outerWidth(true);
  //   	var arrowId = $(this).attr("id");

  //   	var leftIndent = arrowId == "right_arrow" ? ulLeft - liWidth : ulLeft + liWidth; 

		// $("ul").animate({"left" : leftIndent}, function(){              
		// 	arrowId == "right_arrow" ? $("li:last").after($("li:first")) : $("li:first").before($("li:last"));
  //           $("ul").css({"left" : (-liWidth + "vw")});            
  //           matchImageWithDot();
  //       });    	
  //   });

    // move image left or right depend on position of current dot
    function clickDotMoveImg(distance) {
    	var ulLeft = parseInt($("ul").css("left"));
    	var liWidth = $("li").outerWidth(true);
    	var leftIndent = distance > 0 ? ulLeft - liWidth : ulLeft + liWidth;

		$("ul").animate({"left" : leftIndent}, function(){              
			distance > 0 ? $("li:last").after($("li:first")) : $("li:first").before($("li:last"));
            $("ul").css({"left" : -liWidth});
            matchImageWithDot();     
        });       	
    };

    // click on dot moves image
    $("a").click(function() {
    	var currentDot = $(".active").index();
    	var clickedDot = $(this).index();
    	var distance = clickedDot - currentDot;
    	var rightInterval = setInterval(clickDotMoveImg.bind(null, distance), 500);
    	
    	if (distance > 0) {
    		setTimeout(function(){clearInterval(rightInterval)}, (distance * 500));
    	} else {
    		setTimeout(function(){clearInterval(rightInterval)}, (-distance * 500));
    	}
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