 
$(document).ready(function(){ 
	$('.fade').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
});





 
$(document).ready(function(){
    $(".accordion .plus:first").addClass("hover");
    $(".accordion p:not(:first)").hide();
 
    $(".accordion .plus").click(function(){
 
        $(this).next("p").slideToggle("slow")
        .siblings("p:visible").slideUp("slow");
        $(this).toggleClass("hover");
        $(this).siblings(".plus").removeClass("hover");
     });
  
 });
 
