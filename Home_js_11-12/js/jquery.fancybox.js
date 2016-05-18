(function($) {

		$.fn.fancybox = function(options) {

		var defaults = {
			overlayColor: 'black',
			fontSize: '13px'
		};
		var settings = $.extend(defaults.options);

		var $link = this;
		var $body = $('body');
		var $modal;
		var $overlay;

		function showModal(e) {
			var href = $link.attr('href');
			
			$modal = $('<div class="fancybox-modal"><img src="'+ href +'"><p style="fontsize">some text</p></div>');
			$overlay = $('<div class="fancybox-overlay">');
			$overlay.css({
				'background-color': settings.overlayColor	
			});
			
			e.preventDefault();

			$body.append($overlay);
			$body.append($modal);
			$overlay.one('click', hideModal);
		} 
	
		function hideModal() {
			$modal.remove();
			$overlay.remove();

		}

		$link.on('click', showModal);

		return this; 
	}


}) (jQuery);