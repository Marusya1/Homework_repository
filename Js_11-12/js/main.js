$(function () {

	$('.carousel-list').Carousel();
	$('a.fancybox').fancybox ({
	overlayColor: 'green'
	});
	

	var html = $('#test').html();
	var myself = [
		{
			myname: 'Марина Котлярова',
			info: 'Студентка курса GoIT'
		},
		{
			content: 'Хочу выучить Frontend, потому что',
			reason: 'Хочу освоить новую специальность',
			reason:	'Получить современное образование'
		},
		{
			phone: '380508166211',
			email: 'mar.kotlyarova@gmail.com',
			vk: 'vk.com/id9701748'
		}
	];

	var content = tmpl(html,{
		data: myself
	});

	$('body').append(content);

});

