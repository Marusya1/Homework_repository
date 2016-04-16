(function ($){
	$.fn.myslide = function(option) {

		var _default = {
			autoSlide: false,
			dots: false,
			arrow: false
		}
		console.log(option);
		console.log(_default);
		var _setting = $.extend(_default,option);
	//	console.log(option);
	//	console.log(_default);	
	//	console.log(_setting);
		var _this = $(_this);
		var currentSlide = $('.slider').attr('data-current');
		var slideWidth = $('.slider').width();
		function nextSlider() {
			currentSlide++;
			var positionLeft = sliderWidth*currentSlide;
			$('.slider-track').css({'left', -positionLeft});
		}

		$('.next').on('click', function() {
			nextSlider();
		});
	}
		
})(jQuery);