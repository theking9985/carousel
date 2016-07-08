$(document).ready(function() {  

    $("#right_arrow").click(function(){
        var leftIndent = parseInt($("ul").css("left")) - $("li").width();
        
        $("ul").animate({"left" : leftIndent}, function(){  
            $("li:last").after($("li:first"));   
            $("ul").css({"left" : "-410px"});
        });
    });  

    $("#left_arrow").click(function(){  
        var leftIndent = parseInt($("ul").css("left")) + $("li").width();

        $("ul").animate({"left" : leftIndent}, function(){
	        $("li:first").before($("li:last"));
	        $("ul").css({"left" : "-410px"});
        });    
    });  
});  