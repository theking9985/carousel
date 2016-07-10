$(document).ready(function() {

	// $("li:first").before($("li:last"));

    $("#right_arrow").click(function(){
        var leftIndent = parseInt($("ul").css("left")) - $("li").width();

        $("ul").animate({"left" : leftIndent}, function(){  
            $("li:last").after($("li:first"));   
            $("ul").css({"left" : "-31.15vw"});
        });
    });  

    $("#left_arrow").click(function(){  
        var leftIndent = parseInt($("ul").css("left")) + $("li").width();

        $("ul").animate({"left" : leftIndent}, function(){
	        $("li:first").before($("li:last"));
	        $("ul").css({"left" : "-31.15vw"});
        });    
    });  
});  