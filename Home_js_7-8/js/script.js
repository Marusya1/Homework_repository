/*$(function (){

	var $links = $('.menu a');

	$links.on('click', function (e) {
		var $submenu = $(this).siblings('.submenu');
		e.preventDefault();
		console.log('submenu', $submenu);
		$submenu.show();
	})
})
*/
 $.fn.animateBox = function() {
 	$(this).animate({'left': '+=1000'}, 3000);
 }
 $(function() {
 	$('.box').animateBox();
 	$('.box2').animateBox();
 });


 