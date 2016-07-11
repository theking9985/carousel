$(document).ready(function() {

    var imgArray = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
    var dotArray = ["#dot5", "#dot1", "#dot2", "#dot3", "#dot4"];

	// dot moves when click on arrow
    function matchImageWithDot() {
	    for (var i = 0; i < imgArray.length; i++) {
	    	if ($("li:nth-child(2) img").attr("src") == imgArray[i]) {
	    		$(dotArray[i]).addClass("active").siblings().removeClass("active");
	    		return;
	    	}
	    };
    }

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
});  