
	$(document).ready(function(){
	$(".button").click(function(){
		var value = $(this).attr("data-filter");
		if (value == "all")
		{
			$(".filter").show("1000");
		}
		else
		{
			$(".filter").not("."+value).hide("1000");
			$(".filter").filter("."+value).show("1000");
		}
		//add active class
		$("ul .button").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	})
})

	
	
	
	
	
/*(".button-w").click(function(){
        $("section, div").detach(".teaching, .current");
		
    });

   $(".button-t").click(function(){
       $("section, div").detach(".writing, .current");
   });
	
   $(".button-c").click(function(){
        $("section, div").detach(".writing, .teaching");
   });
 });


//var clone = $(".notification").clone(); // making zeh' clones!
//$(".notification").remove();            // original is gone
//$("body").append(clone);                // appears to have returned